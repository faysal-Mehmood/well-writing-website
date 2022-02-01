import React from 'react';
import Layout from '../components/layout/';
import OurTeamDetail from '../components/ourteam/';
const OurTeam =
  () => {
    return (
      <div>
        <Layout  showBanner={
            true
          }>

          <OurTeamDetail />
        </Layout>
      </div>
    );
  };

export default OurTeam;
