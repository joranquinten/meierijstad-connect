import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
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
        <section className='ui vertical very fitted segment'>
          <div className='ui container'>
            <h1 className='ui image header'>
              <div className='content'>
              <span className='page-title'>
                Community Isolation Map: The information network to keep your community safe.
              </span>
                <div className='sub header'>
                  Check out the interactive map and stay in touch with the community during the coronavirus isolation.{' '}
                  <a href='https://add.whozinberg.org'>
                    Add more information to the map
                  </a>
                  {' '}to help keeping everyone healthy.
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
            <h2>What do I see on this map?</h2>
            <p>
              At the moment, the map shows people and shops who offer their help and services for the community in and around Muizenberg. I'm currently working hard to add more functionality to it:
            </p>
            <ul>
              <li>A "help" <strong>function for vulnerable people and people in need</strong> who's data need to be protected. This will will soon be online.</li>
              <li>Also, there will be an option to offer <strong>help without being on a map</strong>, if the offered services are not bound to any location.</li>
              <li>The map <strong>will soon be available as an open source project on Github</strong>. Contact me via email for more info.</li>
            </ul>
            <a
              href='https://add.whozinberg.org'
              className='ui primary fluid button'
              style={{marginTop: '1rem'}}
            >
              Add information now
            </a>
            <h2>How can I delete myself from the app?</h2>
            <p>
              Write me an email to{' '}
              <a
                href={`mailto:${data.site.siteMetadata.email}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.site.siteMetadata.email}
              </a>
              .{' '}Otherwise, all your data will be automatically deleted once this map is not being needed anymore.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
