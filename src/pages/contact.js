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
              We must act now.
            </span>
              <div className='sub header'>
                Get in touch with the MUIZ-CAN network and find out more. If you are looking for information about the COVID-19 pandemic, visit our <Link to={'/'}>Information</Link> page.
              </div>
              <Link to={'/'} className={'ui black icon button'}>
                <i className={'icon map'}/> Go to the map
              </Link>
            </div>
          </h1>
        </div>
      </section>

      <section className='ui vertical segment' style={{minHeight: '55vh'}}>
        <div className='ui text container formcontainer'><div className={'ui yellow message'} style={{fontWeight: 500, fontStyle: 'italic'}}>
          <i className={'icon external link'} />Read the Tutorial about how to set up your own map <a href={'https://medium.com/@marcfehr/how-to-build-a-fast-and-reliable-community-mapping-tool-with-gatsbyjs-and-firebase-74a0fa6b5b83?source=userActivityShare-f57d26da4972-1584988662&_branch_match_id=689400773593121406'} target={'_blank'} rel={'noopener noreferrer'}>here</a>.
        </div>
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
