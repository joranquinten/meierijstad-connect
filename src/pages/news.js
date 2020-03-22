import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const News = () => {
  return (
    <Layout>
      <Head title="Add" />
      <h1>News</h1>
      <p>Busy deploying an open source version. Want to help me? <Link to="/contact">Reach out.</Link>
      </p>
    </Layout>
  );
};

export default News;
