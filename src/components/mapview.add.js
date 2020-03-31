import React, { useState } from 'react';
import './mapview.add.scss';
import AnimatedMap from './map-add/animatedmap/component.js';
import categories from '../components/categories';
import { useStaticQuery, graphql, Link } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';

const scrollToElement = require('scroll-to-element');

/*
See gatsby-config.js in main dir for bounds
 */

export function MapAddComponent() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          share {
            text
            hashtags
          }
          mapData {
            bounds
          }
        }
      }
    }
  `);
  const askTexts = {
    formTitle: 'Over je vraag',
    title_placeholder:
      'Ik heb hulp nodig met boodschappen / Ik wil graag (video)bellen',
    category: 'Vraag categorie',
    description: 'Wat heb je nodig?',
    description_placeholder:
      'Schrijf een korte tekst die omschrijft welke vraag je hebt.',
  };

  const offerTexts = {
    formTitle: 'Over je service',
    title_placeholder:
      'Ik wil helpen met boodschappen doen / Ik wil graag (video)bellen',
    category: 'Service categorie',
    description: 'Wat bied je aan?',
    description_placeholder:
      'Schrijf een korte tekst die omschrijft welke service je aanbiedt.',
  };

  const getText = path => {
    try {
      return content.ask ? askTexts[path] : offerTexts[path];
    } catch {
      return `Er is nog geen text voor ${path}.`;
    }
  };

  const [mapActive, setMapActive] = useState(false);
  const [map, setMap] = useState(null);
  const [positionSelected, setPositionSelected] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [content, setContent] = useState({
    ask: false,
    position: [],
    category: '',
    title: '',
    description: '',
    contact: '',
    address: '',
    phone: '',
    url: '',
    email: '',
    name: '',
    timestamp: Date.now(),
    approved: false,
  });

  const onChange = e => {
    // content[e.target.name] = e.target.value
    const c = { ...content };
    c[e.target.name] = e.target.value;
    setContent(c);
  };

  React.useEffect(() => {
    if (mapActive) {
      map.on('click', e => {
        const pos = [e.lngLat.lng, e.lngLat.lat];
        setContent({ ...content, position: pos });
        map.getSource('position').setData({
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: pos },
            },
          ],
        });
      });

      // Fit effect
      map.fitBounds(data.site.siteMetadata.mapData.bounds, { duration: 700 });
    }
  }, [mapActive]);

  React.useEffect(() => {
    scrollToElement('#formcontent');
  }, [positionSelected]);

  React.useEffect(() => {
    if (formSent === true) {
      const newPostKey = firebase
        .database()
        .ref()
        .child('data')
        .push().key;

      firebase
        .database()
        .ref('/data/' + newPostKey)
        .update(content)
        .then(() => {
          console.log('Writing done');
        })
        .catch(e => {
          console.log('error', e);
        });

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'service',
          title: 'New application',
          id: newPostKey,
        }),
      })
        .then(() => {})
        .catch(error => console.error(error));
    }
  }, [formSent]);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const validateForm = () => {
    let error = false;
    error = content.title.length === 0 ? true : error;
    error = content.description.length === 0 ? true : error;
    error = content.address.length === 0 ? true : error;
    error = content.contact.length === 0 ? true : error;
    error = content.name.length === 0 ? true : error;
    error = content.email.length === 0 ? true : error;
    error = content.category.length === 0 ? true : error;

    if (error) {
      setShowError(true);
    } else {
      setFormSent(true);
    }
  };

  return (
    <div id={'map-add-component'}>
      {/* This static form is required for Netlify to scrape, the fields need to align with the sent fields via the .fetch */}
      <form
        name="service"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input name="bot-field" type="hidden" />
        <input type="hidden" name="form-name" value="service" />
        <input type="text" name="title" />
        <input type="text" name="id" />
      </form>

      <div
        id="mapcontainer"
        style={{ display: positionSelected ? 'none' : 'inherit' }}
      >
        <AnimatedMap getMapObject={m => setMap(m)} enabled={mapActive} />
        {!mapActive && (
          <div id="overlay" className="box">
            <h3>Informatie toevoegen</h3>
            <p>
              Kies de positie op de kaart om deel te nemen aan Meierijstad
              Connect.
            </p>
            <button
              className="ui primary button"
              onClick={() => setMapActive(true)}
            >
              Plaats aanbod
            </button>
            <button
              className="ui primary button"
              onClick={() => {
                setMapActive(true);
                setContent({ ...content, ask: true });
              }}
            >
              Plaats hulpvraag
            </button>
          </div>
        )}

        {content.position.length > 0 && (
          <div id="selectThisPoint" className="box">
            <h3>Je hebt een positie gekozen</h3>
            <p>Kunnen we deze gebruiken?</p>
            <div className="ui buttons">
              <button
                className="ui button"
                onClick={() => {
                  setContent({ ...content, position: [] });
                }}
              >
                Nee, laat me opnieuw kiezen...
              </button>
              <button
                className="ui positive button"
                onClick={() => setPositionSelected(true)}
              >
                Ja!
              </button>
            </div>
          </div>
        )}
      </div>

      {positionSelected && !formSent && (
        <div id="formcontent" className="ui vertical segment">
          <div className="ui text container formcontainer">
            <button
              className="ui left labeled icon button compact"
              onClick={() => {
                setPositionSelected(false);
                setContent({ ...content, position: [] });
              }}
            >
              <i className="left arrow icon" />
              Verander locatie
            </button>
            <div className="ui form">
              <h4 className="ui horizontal divider header">
                {getText('formTitle')} (publieke informatie)
              </h4>
              <p>
                Vul onderstaande vragen zo goed mogelijk in. Dit wordt
                weergegeven op de kaart. Momenteel is het mogelijk om{' '}
                <strong>een categorie</strong> per punt te kiezen. Je kunt
                meerdere punten aanmaken op de kaart.
              </p>

              <div className="field">
                <label>{getText('category')}</label>
                <select
                  value={content.category}
                  className="ui dropdown"
                  onChange={e =>
                    setContent({ ...content, category: e.target.value })
                  }
                >
                  <option value="" />
                  {categories.map(c => (
                    <option value={c.ident} key={c.ident}>
                      {c.text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field required">
                <label>Titel</label>
                <input
                  type="text"
                  name="title"
                  value={content.title}
                  onChange={onChange}
                  placeholder={getText('title_placeholder')}
                />
              </div>

              <div className="field required">
                <label>{getText('description')}</label>
                <textarea
                  rows={4}
                  name="description"
                  onChange={onChange}
                  placeholder={getText('description_placeholder')}
                  defaultValue={content.description}
                />
              </div>

              <div className="field required">
                <label>Hoe komen we in contact?</label>
                <textarea
                  rows={4}
                  name="contact"
                  placeholder="Dit is publieke informatie, bijvoorbeeld: Whatsapp: 012 234 23 23, Email: xyz@abc.nl"
                  defaultValue={content.contact}
                  onChange={onChange}
                />
              </div>

              <div className="field required">
                <label>Wat is je (post) adres?</label>
                <textarea
                  rows={4}
                  name="address"
                  placeholder="Hoofdstraat 1, Meierijstad. Dit gebruiken we om de aangegeven locatie te bevestigen."
                  defaultValue={content.address}
                  onChange={onChange}
                />
              </div>

              {!content.ask && (
                <div className="field">
                  <label>Je website (niet verplicht)</label>
                  <input
                    type="text"
                    name="url"
                    placeholder="http..."
                    defaultValue={content.url}
                    onChange={onChange}
                  />
                </div>
              )}

              <h4 className="ui horizontal divider header">Extra informatie</h4>
              <p>Dit wordt niet op de website gepubliceerd.</p>

              <div className="field required">
                <label>Je naam</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jan de Vries"
                  defaultValue={content.name}
                  onChange={onChange}
                />
              </div>

              <div className="field required">
                <label>Je emailadres</label>
                <input
                  type="text"
                  name="email"
                  placeholder="ik@domein.nl"
                  defaultValue={content.email}
                  onChange={onChange}
                />
              </div>

              <div className="field">
                <label>Je telefoonnummer (niet verplicht)</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="06..."
                  defaultValue={content.phone}
                  onChange={onChange}
                />
              </div>

              {showError && (
                <div className="ui negative message">
                  <div className="header">Ontbrekende gegevens</div>
                  <p>Vul alsjelieft de verplichte velden in.</p>
                </div>
              )}

              <div className="ui buttons">
                <button className="ui positive button" onClick={validateForm}>
                  Aanmelden
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {formSent && (
        <div className="ui vertical segment">
          <div className="ui text container">
            <div className="ui success message">
              <div className="header">Super!</div>
              <p>
                Je gegevens zijn verstuurd en worden zichtbaar op{' '}
                <Link to="/"> {data.site.siteMetadata.title}</Link> na
                goedkeuring en controle van de gegevens.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
