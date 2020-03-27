import React, { useState } from 'react'
import './mapview.add.scss'
import AnimatedMap from './map-add/animatedmap/component.js'
import categories from '../components/categories'
import { useStaticQuery, graphql, Link } from 'gatsby';
import firebase from "gatsby-plugin-firebase";

const scrollToElement = require('scroll-to-element');

/*
See gatsby-config.js in main dir for bounds
 */

export function MapAddComponent() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          share {
            text,
            hashtags
          },
          mapData {
            bounds
          }
        },
      }
    }
  `);

  const [mapActive, setMapActive] = useState(false);
  const [map, setMap] = useState(null);
  const [positionSelected, setPositionSelected] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [content, setContent] = useState({
    position: [],
    category: '',
    title: '',
    description: '',
    contact: '',
    address: '',
    phone: '',
    email: '',
    name: '',
    timestamp: Date.now(),
    approved: false
  })

  const onChange = e => {
    // content[e.target.name] = e.target.value
    const c = { ...content }
    c[e.target.name] = e.target.value
    setContent(c)
  };

  React.useEffect(() => {
    if (mapActive) {
      map.on('click', e => {
        const pos = [e.lngLat.lng, e.lngLat.lat]

        console.log(pos);
        setContent({ ...content, position: pos })
        map.getSource('position').setData({
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: pos }
            }
          ]
        })
      });

      // Fit effect
      map.fitBounds(
        data.site.siteMetadata.mapData.bounds,
        { duration: 700 }
      )
    }
  }, [mapActive]);

  React.useEffect(() => {
    scrollToElement('#formcontent')
  }, [positionSelected]);

  React.useEffect(() => {
    if (formSent === true) {
      const newPostKey = firebase
        .database()
        .ref()
        .child('data')
        .push().key

      firebase
        .database()
        .ref('/data/' + newPostKey)
        .update(content)
        .then(() => {
          console.log('Writing done')
        })
        .catch(e => {
          console.log('error', e)
        })
    }
  }, [formSent])

  const validateForm = () => {
    let error = false
    error = content.title.length === 0 ? true : error
    error = content.description.length === 0 ? true : error
    error = content.address.length === 0 ? true : error
    error = content.contact.length === 0 ? true : error
    error = content.name.length === 0 ? true : error
    error = content.email.length === 0 ? true : error
    error = content.category.length === 0 ? true : error

    if (error) {
      setShowError(true)
    } else {
      setFormSent(true)
    }
  }

  return (
    <div id={'map-add-component'}>
      <div
        id='mapcontainer'
        style={{ display: positionSelected ? 'none' : 'inherit' }}
      >
        <AnimatedMap getMapObject={m => setMap(m)} enabled={mapActive} />
        {!mapActive && (
          <div id='overlay' className='box'>
            <h3>Informatie toevoegen</h3>
            <p>
              Kies de positie op de kaart om deel te nemen aan MeierijstadConnect.
            </p>
            <button
              className='ui primary button'
              onClick={() => setMapActive(true)}
            >
              Voeg service of informatie toe
            </button>
          </div>
        )}

        {content.position.length > 0 && (
          <div id='selectThisPoint' className='box'>
            <h3>Je hebt een positie gekozen</h3>
            <p>Kunnen we deze gebruiken?</p>
            <div className='ui buttons'>
              <button
                className='ui button'
                onClick={() => {
                  setContent({ ...content, position: [] })
                }}
              >
                Nee, laat me opnieuw kiezen...
              </button>
              <button
                className='ui positive button'
                onClick={() => setPositionSelected(true)}
              >
                Ja!
              </button>
            </div>
          </div>
        )}
      </div>

      {positionSelected && !formSent && (
        <div id='formcontent' className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <button
              className='ui left labeled icon button compact'
              onClick={() => {
                setPositionSelected(false)
                setContent({ ...content, position: [] })
              }}
            >
              <i className='left arrow icon' />
              Verander locatie
            </button>
            <div className='ui form'>
              <h4 className='ui horizontal divider header'>
                Over je service (publieke informatie)
              </h4>
              <p>
                Vul onderstaande vragen zo goed mogelijk in. Dit wordt weergegeven op de kaart. Momenteel is het mogelijk om <strong>een categorie</strong> per punt te kiezen. Wanneer je meerdere diensten aan wilt bieden, kun je meerdere punten aanmaken op de kaart.
              </p>

              <div className='field'>
                <label>Service categorie</label>
                <select
                  value={content.category}
                  className='ui dropdown'
                  onChange={e =>
                    setContent({ ...content, category: e.target.value })
                  }
                >
                  <option value='' />
                  {categories.map(c => (
                    <option value={c.ident} key={c.ident}>
                      {c.text}
                    </option>
                  ))}
                </select>
                {/*
                <CategoryButtons
                  onClick={name => setContent({ ...content, category: name })}
                  selected={content.category}
                /> */}
              </div>

              <div className='field required'>
                <label>Titel</label>
                <input
                  type='text'
                  name='title'
                  value={content.title}
                  onChange={onChange}
                  placeholder='Ik help met boodschappen / Ik heb toiletpapier over / anders?'
                />
              </div>

              <div className='field required'>
                <label>Wat bied je aan?</label>
                <textarea
                  rows={4}
                  name='description'
                  onChange={onChange}
                  placeholder='Schrijf een korte tekst die omschrijft welke dienst of informatie je aanbiedt.'
                  defaultValue={content.description}
                />
              </div>

              <div className='field required'>
                <label>Hoe komen we in contact?</label>
                <textarea
                  rows={4}
                  name='contact'
                  placeholder='Dit is publieke informatie, bijvoorbeeld: Whatsapp: 012 234 23 23, Email: xyz@abc.nl'
                  defaultValue={content.contact}
                  onChange={onChange}
                />
              </div>

              <div className='field required'>
                <label>Wat is je (post) adres?</label>
                <textarea
                  rows={4}
                  name='address'
                  placeholder='Hoofdstraat 1, Meierijstad. Dit gebruiken we om de aangegeven locatie te bevestigen.'
                  defaultValue={content.address}
                  onChange={onChange}
                />
              </div>

              <h4 className='ui horizontal divider header'>
                Extra informatie
              </h4>
              <p>
                Dit wordt niet op de website gepubliceerd.
              </p>

              <div className='field required'>
                <label>Je naam</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Jan de Vries'
                  defaultValue={content.name}
                  onChange={onChange}
                />
              </div>

              <div className='field required'>
                <label>Je emailadres</label>
                <input
                  type='text'
                  name='email'
                  placeholder='ik@domein.nl'
                  defaultValue={content.email}
                  onChange={onChange}
                />
              </div>

              <div className='field'>
                <label>Je telefoonnummer (niet verplicht)</label>
                <input
                  type='text'
                  name='phone'
                  placeholder='06...'
                  defaultValue={content.phone}
                  onChange={onChange}
                />
              </div>

              {showError && (
                <div className='ui negative message'>
                  <div className='header'>Ontbrekende gegevens</div>
                  <p>
                    Vul alsjenlieft de verplichte velden in.
                  </p>
                </div>
              )}

              <div className='ui buttons'>
                <button className='ui positive button' onClick={validateForm}>
                  Aanmelden
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {formSent && (
        <div className='ui vertical segment'>
          <div className='ui text container'>
            <div className='ui success message'>
              <div className='header'>Super!</div>
              <p>
                Je gegevens zijn verstuurd en worden zichtbaar op{' '}
                <Link to='/'>{' '}{data.site.siteMetadata.title}
                </Link>{' '}
                na goedkeuring en controle van de gegevens.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className='ui vertical segment'>
        <div className='ui text container formcontainer'>
          <h2>Wat gebeurt er met mijn data?</h2>
          <p>We controleren je gegevens en voegen het toe aan de interactieve kaart wanneer we vinden dat het een nuttige bijdrage is. In de regel gebeurt dit binnen een dag. Als we vinden dat er nog informatie ontbreekt, of als er een reden is dat we het niet plaatsen, laten we dat altijd even weten.</p>
          <h2>Wat voor soort data wordt goedgekeurd?</h2>
          <p>Iedereen kan bijdragen aan Meierijstad Connect. Of je nu via Skype wilt voorlezen aan kinderen, beschikbaar bent om gewoon even te kletsen, wat kleine boodschappen haalt of gewoon een nieuwe afhaaldienst wilt opzetten: hier kun je terecht.</p>
          <p>Vrijwilligers, profit of non-profit, we staan veel toe, als het bijdraagt aan het doel om de inwoners van Meierijstad te helpen.</p>
          <h2>Hoe kan ik mijn gegevens verwijderen?</h2>
          <p>Wanneer je <strong>verwijderd wilt worden</strong> van de interactieve kaart, stuur een email naar{' '}
          <a
            href='mailto:connect@qtnconsulting.nl'
          >
            connect@qtnconsulting.nl
          </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
