import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { MapViewComponent } from '../components/mapview.main';
/* SEO Component with React Helmet */
import Head from '../components/head';

const Headless = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          email
        }
      }
    }
  `);

  return (
    <>
      <Head title={data.site.siteMetadata.title} />
      <Layout headless>
        <MapViewComponent />
      </Layout>
    </>
  );
};

export default Headless;
