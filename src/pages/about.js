import React from 'react';
import Layout from '../components/layout/';

import AboutDetail from '../components/aboutdetail/';
const About =
  () => {
    return (
      <div>
        <Layout
          showBanner={
            true
          }
        >
          <AboutDetail />
        </Layout>
      </div>
    );
  };

export default About;
