import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Link } from 'gatsby'
import { MapViewComponent } from '../components/mapview.main'
/* SEO Component with React Helmet */
import Head from '../components/head'

const Index = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          email
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title={data.site.siteMetadata.title} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
          <div className='ui container'>
            <h1 className='ui header'>
              <div className='content'>
                <span className={'page-title'}>Meijerijstad Connect: Het informatienetwerk om je buurt gezond te houden.</span>
                <div className='sub header'>
                  Bekijk de interactieve kaart en blijft verbonden met de gemeenschap tijdens het Coronavirus isolatie.{' '}
                  <Link to={'/add'}>
                    Voeg publieke informatie toe aan de kaart
                  </Link>
                  {' '}en help iedereen gezond te houden.
                </div>
              </div>
            </h1>
          </div>
        </section>
        <section>
          <MapViewComponent />
        </section>
        <section className='ui vertical segment intro'>
          <div className='ui text container formcontainer'>

            <h2>Wat zie ik op de kaart?</h2>
            <p>
              Op het moment laat de kaart mensen, bedrijven en organisaties zien die hulp en diensten aanbieden binnen gemeente Meierijstad.
            </p>
            <Link
              to={'/add'}
              className='ui primary fluid button'
              style={{marginTop: '1rem'}}
            >
              Voeg meer informatie toe
            </Link>
            <h2>Hoe kan ik mezelf verwijderen van de interactieve kaart?</h2>
            <p>
              Stuur een email naar{' '}
              <a
                href={`mailto:${data.site.siteMetadata.email}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.site.siteMetadata.email}
              </a>
              .{' '}Alle data wordt automatisch verwijderd zodra er geen noodzaak meer is om dit informatienetwerk te gebruiken.
            </p>


      <div className='ui vertical segment'>
        <div className='ui text container formcontainer'>
          <h2>Kunnen we iets verbeteren?</h2>
          Dit is een tool die bedoeld is voor gebruik, en constructieve feedback is altijd welkom. Heb je ideeën om bepaalde onderdelen beter te maken, laat het me weten via 
          This tool is supposed to be used, why we're constantly looking for constructive feedback. If you have anything that you think would make this all better, please let me know via{' '}
          <a
            href='mailto:joran@qtnconsulting.nl'
          >
            joran@qtnconsulting.nl
          </a>.
          <h2>Waarom alleen Meierijstad?</h2>
          Omdat het op het moment veiliger is om zo lokaal en geïsoleerd mogelijk te leven. Wil je soortgelijke oplossing in jouw directe omgeving inzetten? Neem dan even {' '}
          <a
          href='mailto:joran@qtnconsulting.nl'
        >
            contact op via email
        </a>{' '} om de mogelijkheden te bespreken.
      Het project is als <strong>open source repository</strong> beschikbaar op <a href='https://gitlab.com/marc.fehr/community-isolation-map'>Gitlab</a>.
        </div>
      </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
