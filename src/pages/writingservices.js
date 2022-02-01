import React from 'react';
import Layout from '../components/layout';
import OrderWrittingSerives from '../components/orderwrittingservices/';
const WritingServices = () => {

    return (
      <div>
        <Layout  showBanner={
            true
          }>

          <OrderWrittingSerives />
        </Layout>
      </div>
    );
  };

export default WritingServices;
