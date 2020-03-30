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
               Informatie toevoegen
                <div className='sub header'>
                Zo helpen we elkaar!
                </div>
              </span>
              </div>
            </h1>
          </div>
        </section>

        <section className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <h2>Dit is hoe het werkt</h2>
            Kies een locatie op de kaart. Voeg je dienst of informatie toe door de vragen in te vullen. <strong>We controleren alle inzendendingen om misbruik te voorkomen.</strong> Zodra je toevoeging is geaccepteerd, verschijnt hij{' '}
            <Link to='/'>
              op de kaart
            </Link>.
          </div>
        </section>
        <section>
          <MapAddComponent />
        </section>

      <section className='ui vertical segment' style={{minHeight: '55vh'}}>
        <div className='ui text container formcontainer'>
          <h2>Wat gebeurt er met mijn data?</h2>
          <p>We controleren je gegevens en voegen het toe aan de interactieve kaart wanneer we vinden dat het een nuttige bijdrage is. In de regel gebeurt dit binnen een dag. Als we vinden dat er nog informatie ontbreekt, of als er een reden is dat we het niet plaatsen, laten we dat altijd even weten.</p>

          <h2>Wat voor soort data wordt goedgekeurd?</h2>
          <p>Iedereen kan bijdragen aan MeierijstadConnect. Of je nu via Skype wilt voorlezen aan kinderen, beschikbaar bent om gewoon even te kletsen, wat kleine boodschappen haalt of een nieuwe afhaaldienst wilt opzetten: hier kun je terecht.</p>
          <p>Vrijwilligers, profit of non-profit, we staan veel toe, als het bijdraagt aan het doel om de inwoners van Meierijstad te helpen.</p>

          <h2>Hoe kan ik mijn gegevens verwijderen?</h2>
          <p>Wanneer je <strong>verwijderd wilt worden</strong> van de interactieve kaart, stuur een email naar{' '} <a href='mailto:connect@qtnconsulting.nl'>connect@qtnconsulting.nl</a> en je gegevens worden zo snel mogelijk verwijderd. Als er geen noodzaak meer is om dit inforamtienetwerk te gebuiken, dan worden automatisch alle
          gegevens verwijderd.</p>
        </div>
      </section>

      </div>
    </Layout>
  );
};

export default Add;
