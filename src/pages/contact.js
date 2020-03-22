import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Information about how to get in touch. Also more information about the project.
        Or hot wo follow <a href="https://twitter.com/@mrcfhr">@mrcfhr</a> on Twitter.
      </p>
    </Layout>
  );
};

export default Contact;
