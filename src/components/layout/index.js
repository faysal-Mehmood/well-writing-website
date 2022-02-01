import React, {
  useEffect,
} from 'react';
import TopNavBar from './topnavbar';
import Footer from './footer';

import BannerSection from '../bannersection';
const Index =
  ({
    children,
    stickypage,
    page,
    redirecting,
    btnPage,
    footerPage,
    FooterPage2,
    showBanner,
  }) => {



    useEffect(() => {
      if (
        typeof window !==
        'undefined'
      ) {
        window.scrollTo(
          0,
          0
        );
      }
    }, []);

    return (
      <>
        <TopNavBar
          page={
            page
          }
          stickypage={
            stickypage
          }
          redirecting={
            redirecting
          }
          btnPage={
            btnPage
          }
        />
        {showBanner && (
          <BannerSection />
        )}
        <main>
          <div className="main">
            {
              children
            }
          </div>
        </main>

          <Footer/>

      </>
    );
  };

export default Index;
