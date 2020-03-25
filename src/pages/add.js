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
                You've got some useful information to share? Test.
              </span>
                <div className='sub header'>
                  While shops and restaurants are closing, people get more and more isolated. Stay safe, help where you can and keep your mental hygiene up. Thanks for sharing your information in the interactive map below.
                </div>
              </div>
            </h1>
          </div>
        </section>

        <section className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <h2>This is how it works</h2>
            Choose a place on the map where you want the information to appear. You'll be asked to provide us with information about your entry before you can send it off. <strong>We are going to check all entries manually</strong>. Once your entry is approvoved, you'll see it{' '}
            <Link to='/'>
              here
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
