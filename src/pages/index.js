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
                  In deze tijd hebben we elkaar nodig. We staan er niet alleen voor. Kun jij je buren ergens mee van dienst zijn? Of kun je juist wel wat hulp gebruiken? Bijvoorbeeld met de kinderen of bij de boodschappen. Misschien heb je een hond die nodig uit moet, of zoek je wat afleiding?
                  <br/>Wij zien overal om ons heen initiatieven ontstaan. Mensen en organisaties met ideeën om deze tijd fijner, makkelijker en gezelliger te maken. Op dit platform komen de vragen en ideeën samen.<br/><span className="highlighted bold">Meierijstad Connect verbindt ons met elkaar.</span>
                </div>
              </div>
            </h1>
          </div>
                <div className='ui container col-2 slanted'>
                  <div>
                    <h3 className="highlighted">Op zoek naar hulp of ideeën?</h3>
                    <p>Op deze interactieve kaart zie je wie er in je buurt graag wil helpen. Vind je niet wat je zoekt? <Link to="/add">Stel dan gewoon je vraag</Link>. Want iedereen kan wel wat hulp gebruiken in deze rare tijd.</p>
                  </div>
                  <div>
                    <h3 className="highlighted">Hulp of initiatief aanbieden?</h3>
                    <p>Kun jij je buren een handje helpen of wil je een mooi initiatief delen? <Link to="/add">Voeg dit dan toe aan de kaart</Link>. Door onze kennis en krachten te bundelen kunnen we elkaar helpen.</p>
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
