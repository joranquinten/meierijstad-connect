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
                In deze tijd hebben we elkaar nodig. Wil jij mensen in je eigen buurt helpen? Of kun je juist wel wat hulp gebruiken?<br/>
                Bijvoorbeeld met de kinderen of bij de boodschappen. Misschien heb je een hond die nodig uit moet, of voel je je alleen? Kook je graag, en wil je wel een extra bordje maken voor iemand anders? Meierijstad Connect verbindt ons met elkaar.
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
