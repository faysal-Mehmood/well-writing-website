import React, { useState, useEffect } from "react";
import Layout from "../components/layout/";
import Contact from "../components/contact";
import '../components/layout/styles.scss'

const Contactus = () => {
  const [stkyNav3, setStkyNav3] = useState(false);

  const backColor = () => {
    if (window.scrollY > 100) {
      setStkyNav3(true)
    } else {
      setStkyNav3(false)
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', backColor);
  }, []);


  return (
    <div className={stkyNav3 ? "terms-page" : "bg-trasparent"}>
      <Layout page="contact"  showBanner={
            true
          }>
        <Contact />
      </Layout>
    </div>

  );
};

export default Contactus;
