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
            <span className='page-title'>
              Get in touch now.
            </span>
              <div className='sub header'>
                This project has been built in very little time <a href={'mailto:marc.fehr@gmail.com'}>Marc Fehr</a> and is available as an Open Source repository on <a href={'https://gitlab.com/marc.fehr/community-isolation-map'} target={'_blank'} rel={'noopener noreferrer'}>Gitlab</a>. Please share the idea and get in touch if you need any help setting this up for your local community. Any feedback is appreciated!
              </div>
            </div>
          </h1>
          <div className={'ui yellow message'} style={{fontWeight: 500, fontStyle: 'italic'}}>
            <i className={'icon external link'} />Read the Tutorial about how to set up your own map <a href={'https://medium.com/@marcfehr/how-to-build-a-fast-and-reliable-community-mapping-tool-with-gatsbyjs-and-firebase-74a0fa6b5b83?source=userActivityShare-f57d26da4972-1584988662&_branch_match_id=689400773593121406'} target={'_blank'} rel={'noopener noreferrer'}>here</a>.
          </div>
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
          <h2>Shout out on Social Media</h2>
          <p>Please share this repository and help people using it.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
