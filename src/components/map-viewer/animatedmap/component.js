import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useStaticQuery, graphql } from 'gatsby';
import JSONtoGeoJSON from './jsonToGeoJson'
import masked  from '../../../data/reverse_cpt_boundaries'
import { InteractionToggle } from './interactionToggle.js'
import Popup from '../popup'
import categories from '../../../components/categories'
import { ActivationButton } from './activationButton.js'

import './style.scss'

/* Important: Add your own Mapbox key to your .env vars: */
const mapStyle = require('../../../data/map-styles.js');

/* Set your own boundaries with either a rectangle or any other geoJson information in the data dir */

/*
Go to gatsby-config.js in main dir to change bounds
const bounds = [
  [18.459692001342773,-34.08692882376707],
  [18.512563705444336,-34.1109517943943]
]
 */

function AnimatedMap(props) {
  const [mapObject, setMapObject] = useState(null)

  /* We query all the firebase data here */

  const data = useStaticQuery(graphql`
    query {
      allMapPoints(filter: {approved: {eq: true}}) {
        nodes {
          approved,
          address,
          category,
          contact,
          description,
          email,
          id,
          name,
          phone,
          position,
          title
        }
      }
      site {
        siteMetadata {
          title,
          share {
            text,
            hashtags
          }
          mapData {
            bounds
          }
        }
      }
    }
  `);

  const MapPoints = JSONtoGeoJSON(data.allMapPoints);

  const setInteractivity = enabled => {
    if (!mapObject) return

    if (enabled) {
      mapObject.scrollZoom.enable()
      mapObject.boxZoom.enable()
      mapObject.dragRotate.enable()
      mapObject.dragPan.enable()
      mapObject.keyboard.enable()
      mapObject.doubleClickZoom.enable()
      mapObject.touchZoomRotate.enable()
    } else {
      mapObject.scrollZoom.disable()
      mapObject.boxZoom.disable()
      mapObject.dragRotate.disable()
      mapObject.dragPan.disable()
      mapObject.keyboard.disable()
      mapObject.doubleClickZoom.disable()
      mapObject.touchZoomRotate.disable()
    }
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: mapStyle,
      zoom: 8,
      minZoom: 4,
      maxZoom: 18,
      interactive: true,
      bounds: data.site.siteMetadata.mapData.bounds,
    })

    // Return map object
    props.getMapObject(map)

    // Add controls
    const navigationControl = new mapboxgl.NavigationControl({
      showCompass: false
    })

    map.addControl(navigationControl, 'top-right')

    map.activateMap = function() {
      this.scrollZoom.enable()
      this.boxZoom.enable()
      this.dragRotate.enable()
      this.dragPan.enable()
      this.keyboard.enable()
      this.doubleClickZoom.enable()
      this.touchZoomRotate.enable()
    }

    map.deactivateMap = function() {
      this.scrollZoom.disable()
      this.boxZoom.disable()
      this.dragRotate.disable()
      this.dragPan.disable()
      this.keyboard.disable()
      this.doubleClickZoom.disable()
      this.touchZoomRotate.disable()
    }

    map.deactivateMap()

    const interactionControl = new InteractionToggle(map, [
      'Activate map',
      'Activate scrolling'
    ])
    map.addControl(interactionControl, 'top-right')

    setInteractivity(false)

    setMapObject(map)

    // Initial adjustments
    map.once('load', () => {
      // Add CPT Outline
      map.addSource('outline', {
        type: 'geojson',
        data: masked,
      })

      map.addLayer({
        id: 'outline',
        type: 'fill',
        source: 'outline',
        paint: {
          'fill-color': 'white',
          'fill-opacity': 0.6
        }
      })

      map.addLayer({
        id: 'outline2',
        type: 'line',
        source: 'outline',
        paint: {
          'line-color': '#282828',
          'line-width': 2
        }
      })

      map.addSource('data', {
        type: 'geojson',
        data: MapPoints
      });

      const colorDividor = ['match', ['get', 'category']]
      for (const i in categories) {
        const cat = categories[i]
        colorDividor.push(cat.ident)
        colorDividor.push(cat.color)
      }
      colorDividor.push('red')

      map.addLayer({
        id: 'data',
        type: 'circle',
        source: 'data',
        paint: {
          'circle-radius': {
            base: 1,
            stops: [
              [8, 5],
              [18, 15]
            ]
          },

          'circle-color': colorDividor,
          'circle-stroke-width': 0,
          'circle-stroke-color': '#fff'
        }
      })

      // Add Popup
      map.on('click', 'data', e => {
        if (e && e.features && e.features[0].properties) {
          const props = e.features[0].properties

          const placeholder = document.createElement('div')
          ReactDOM.render(<Popup {...props} />, placeholder)
          map.popup = new mapboxgl.Popup()
          map.popup
            .setDOMContent(placeholder)
            .setLngLat(e.lngLat)
            .addTo(map)
        }
      })

      // Fit Map
      map.fitBounds(
        data.site.siteMetadata.mapData.bounds,
        { duration: 700 }
      )

      // On Load Callback
      if (props.onLoad) {
        props.onLoad()
      }
    })
  }, [])

  return (
    <>
      {mapObject && (
        <div className='activateDesktop'>
          <ActivationButton
            activate={() => mapObject.activateMap()}
            deactivate={() => mapObject.deactivateMap()}
            initialState={null}
            buttonText={['Activate map', 'Activate scrolling']}
            icons={['moving.svg', 'scrolling.svg']}
          />
        </div>
      )}
      <div id='map'>{props.children}</div>
    </>
  )
}

export default AnimatedMap
