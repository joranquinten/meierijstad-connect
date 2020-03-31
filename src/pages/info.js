import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title={`Contact`} />
      <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
        <div className='ui container'>
          <h1 className='ui header'>
          <div className='content'>
                <span className={'page-title'}>Veelgestelde vragen</span>
                <div className='sub header'>
                Waarom dit initiatief? Voor wie is dit bedoeld?
                </div>
              </div>
          </h1>
        </div>
      </section>

      <section className='ui vertical segment' style={{minHeight: '55vh'}}>
        <div className='ui text container formcontainer'>
          <h2>Waarom dit initiatief?</h2>
          <p>Deze tool is bedoeld om mensen en initiatieven met elkaar in contact te brengen. We zien veel acties, aanbod -en hulpvragen voorbij komen op sociale media. Op deze kaart zie je in één oogopslag <strong>welke mensen en organisaties hulp en diensten aanbieden</strong>, maar ook <strong>wie hulp nodig heeft</strong> binnen je directe omgeving.
          </p>

          <h2>Hoe kan ik helpen?</h2>
          <p>Je kunt hier je dienst of ideeën aanbieden. Je aanbod verschijnt dan snel op de interactieve
          kaart.</p>

          <h2>Hoe gaan jullie om met de regels van het RIVM?</h2>
          <p>Wij nemen COVID-19 (Corona) meer dan serieus. De ziekte raakt steeds meer mensen om ons heen. Gelukkig is het nog steeds mogelijk om elkaar te helpen, maar neem geen enkel risico en houdt je aan de voorschriften. Houdt fysiek afstand tot elkaar, zorg voor goede hygiëne en blijf zoveel mogelijk thuis.</p>

          <h2>Hoe kan ik mezelf verwijderen van de interactive kaart?</h2>
          <p>Stuur een email naar{' '} <a href='mailto:connect@qtnconsulting.nl'>connect@qtnconsulting.nl</a> en je gegevens worden zo snel mogelijk verwijderd. Als er geen noodzaak meer
          is om dit inforamtienetwerk te gebuiken, dan worden automatisch alle
          gegevens verwijderd.</p>
          
          <h2>Waarom focussen jullie op Meierijstad?</h2>
          <p>Op dit moment is het veiliger is om zo lokaal en geïsoleerd mogelijk te leven. Wil je soortgelijke oplossing in jouw directe omgeving inzetten? Neem dan even {' '}<a href='mailto:connect@qtnconsulting.nl'>contact op via email</a>{' '} om de mogelijkheden te bespreken. Het project is als <strong>open source repository</strong> beschikbaar op <a href='https://gitlab.com/marc.fehr/community-isolation-map'>Gitlab</a>.
          </p>

          <h2>Kunnen we iets verbeteren?</h2>
          <p>Deze tool is bedoeld om snel contact te leggen tussen vraag en aanbod. Constructieve feedback is altijd welkom. Heb je ideeën om bepaalde onderdelen beter te maken, laat het me weten via{' '} <a href='mailto:connect@qtnconsulting.nl'>connect@qtnconsulting.nl</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
