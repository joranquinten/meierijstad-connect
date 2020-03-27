import React from 'react';
import { Link } from 'gatsby'
/* SEO Component with React Helmet */
import Head from '../components/head'
import Layout from '../components/layout'
import { MapAddComponent } from '../components/mapview.add'

const Add = () => {
  return (
    <Layout>
      <Head title={`Add`} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
          <div className='ui container'>
            <h1 className='ui header'>
              <div className='content'>
              <span className='page-title'>
               Heb je nuttige informatie om te delen?
              </span>
                <div className='sub header'>
                  Terwijl winkels en restaurant noodgedwongen sluiten, raken mensen steeds meer geïsoleerd. Blijf veilig, help waar je kunt en blijf gezond.
                  Bedankt voor het delen van informatie op de interactive kaart hieronder.
                </div>
              </div>
            </h1>
          </div>
        </section>

        <section className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <h2>Dit is hoe het werkt</h2>
            Kies een locatie op de kaart waar de informatie hoort. Je wordt gevraagd om de locatie te omschrijven voordat je hem kunt insturen. 
            <strong>We controleren alle inzendendingen met de hand</strong>. Zodra je toevoeging is geaccepteerd, verschijnt hij{' '}
            <Link to='/'>
              op de kaart
            </Link>.
          </div>
        </section>
        <section>
          <MapAddComponent />
        </section>

      </div>
    </Layout>
  );
};

export default Add;
