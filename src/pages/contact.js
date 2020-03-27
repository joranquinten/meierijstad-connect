import React from 'react';
import { Link } from 'gatsby';

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
            <span className='page-title'>
              Help elkaar.
            </span>
            </div>
          </h1>
        </div>
      </section>

      <section className='ui vertical segment' style={{minHeight: '55vh'}}>
        <div className='ui text container formcontainer'>
          <h2>Reach out via email</h2>
          <ul>
            <li>
              {/* If you're a developer, add yourself here and create a MR on Gitlab do get onto the original repository */}
              <a href='mailto:marc.fehr@gmail.com'>
                Marc Fehr
              </a>, developer and maintainer of{' '}
              <a href={'https://www.whozinberg.org'} target={'_blank'} rel={'noopener noreferrer'}>
                whozinberg.org
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
