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
                <span className={'page-title'}>Meijerijstad Connect:<br/>Het informatienetwerk wat de buurt verbindt.</span>
                <div className='sub header'>
                  Bekijk de interactieve kaart en blijf verbonden met de gemeenschap tijdens de Coronavirus isolatie.{' '}
                  <br/><Link to={'/add'}>
                    Voeg publieke informatie toe aan de kaart
                  </Link>
                  {' '}en help elkaar.
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
              De kaart toont mensen en organisaties die hulp en diensten aanbieden binnen gemeente Meierijstad.
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
          Dit is een tool die bedoeld om snel contact te leggen met relevante diensten. Constructieve feedback is altijd welkom. Heb je ideeën om bepaalde onderdelen beter te maken, laat het me weten via{' '}
          <a
            href='mailto:connect@qtnconsulting.nl'
          >
            connect@qtnconsulting.nl
          </a>.
          <h2>Waarom alleen Meierijstad?</h2>
          Omdat het op het moment veiliger is om zo lokaal en geïsoleerd mogelijk te leven. Wil je soortgelijke oplossing in jouw directe omgeving inzetten? Neem dan even {' '}
          <a
          href='mailto:connect@qtnconsulting.nl'
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
