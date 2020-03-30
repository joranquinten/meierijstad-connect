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
      <div className='index homepage'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
          <div className='ui container'>
            <h1 className='ui header'>
              <div className='content'>
                <span className={'page-title'}>Meijerijstad Connect:<br/>Samen verbonden</span>
                <div className='sub header'>
                In deze tijd gaat alles even anders dan anders. Maar we staan er niet alleen voor. Wij zien overal om ons heen initiatieven ontstaan. Buren die elkaar willen helpen. Met de boodschappen, het opvangen van kinderen of het uitlaten van de hond. En er ontstaan ook ideeën om deze tijd leuker, makkelijker en gezelliger te maken voor iedereen. Op dit platform komen al die mogelijkheden samen. Zo kunnen we elkaar vinden.<br/> Meierijstad Connect verbindt ons met elkaar.
                </div>
              </div>
            </h1>
          </div>
                <div className='ui container col-2'>
                  <div>
                    <h3>Ben je op zoek naar hulp of informatie?</h3>
                    <p>Op deze interactieve kaart kun je zien wie er in jouw buurt graag wil helpen of een mooi initiatief wil delen. Kies een categorie en klik op de kaart om in contact te komen.</p>
                  </div>
                  <div>
                    <h3>Je dienst aanbieden?</h3>
                    <p>Heb je nuttige informatie om te delen? <Link to="/add">Voeg deze dan toe aan de kaart</Link>. Door onze kennis en krachten te bundelen kunnen we elkaar helpen.<br/>
                    <em>Let op: deze informatie is publiek toegankelijk.</em></p>
                  </div>
                </div>
        </section>
        <section>
          <MapViewComponent />
        </section>
    </div>
    </Layout>
  );
};

export default Index;
