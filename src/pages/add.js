import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const Add = () => {
  return (
    <Layout>
      <Head title="Add" />
      <h1>Add</h1>
      <p>I'm currently working on passion projects.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  );
};

export default Add;
