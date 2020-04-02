import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import AdminPanel from '../components/admin'

const Admin = () => {
  return (
    <Layout>
      <Head title={`Admin`} />
      <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
        <div className='ui container'>
          <h1 className='ui header'>
          <div className='content'>
                <span className={'page-title'}>Admin panel</span>
              </div>
          </h1>
        </div>
      </section>

      <section className='ui vertical segment' style={{minHeight: '55vh'}}>
        <AdminPanel />
      </section>
    </Layout>
  );
};

export default Admin;
