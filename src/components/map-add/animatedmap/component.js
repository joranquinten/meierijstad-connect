import React, { useEffect, useState } from 'react'
import '../../../components/mapview.add.scss'
import mapboxgl from 'mapbox-gl'
import { useStaticQuery, graphql } from 'gatsby';
import 'mapbox-gl/dist/mapbox-gl.css'

/* Set your own boundaries with either a rectangle or any other geoJson information in the data dir */
import masked  from '../../../data/reverse_cpt_boundaries'

/* Important: Add your own Mapbox key to your .env vars: */
const mapStyle = require('../../../data/map-styles.js');

/* Go to gatsby-config.js to change bounds
const bounds = [
  [18.459692001342773,-34.08692882376707],
  [18.512563705444336,-34.1109517943943]
]
 */

function AnimatedMap(props) {
  const [mapObject, setMapObject] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mapData {
            bounds
          }
        },
      }
    }
  `);

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
      document.querySelector('.mapboxgl-control-container').style.display =
        'initial'
    } else {
      mapObject.scrollZoom.disable()
      mapObject.boxZoom.disable()
      mapObject.dragRotate.disable()
      mapObject.dragPan.disable()
      mapObject.keyboard.disable()
      mapObject.doubleClickZoom.disable()
      mapObject.touchZoomRotate.disable()
      document.querySelector('.mapboxgl-control-container').style.display =
        'none'
    }
  }

  if ('enabled' in props) setInteractivity(props.enabled)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      // width: '100%',
      // height: '100%',
      style: mapStyle,
      zoom: 8,
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
    setInteractivity(false)

    setMapObject(map)

    // Initial adjustments
    map.once('load', () => {
      // Add ZH Outline
      map.addSource('outline', {
        type: 'geojson',
        data: masked
      })

      map.addLayer({
        id: 'outline',
        type: 'fill',
        source: 'outline',
        paint: {
          'fill-color': '#ff0000',
          'fill-opacity': 0.1
        }
      })

      map.addLayer({
        id: 'outline2',
        type: 'line',
        source: 'outline',
        paint: {
          'line-color': '#2ecc71',
          'line-width': 2
        }
      })

      // Add UserPoint
      map.addSource('position', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      })

      map.addLayer({
        id: 'position',
        type: 'circle',
        source: 'position',
        paint: {
          'circle-radius': 6,
          'circle-color': '#27ae60',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff'
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
      <div id='map'>{props.children}</div>
    </>
  )
}

export default AnimatedMap
