import React from "react";
import Layout from "../components/layout/";
import HeroSection from "../components/heroSection";
import Intro from "../components/shortintro/index";
import AboutSocial from "../components/logocontainer";
import Testominals from "../components/logocontainer/testomnials";
import SEO from '../components/layout/seo'

const Index = () => {
    return (
        <div >
            <Layout>
                <SEO />

                <HeroSection />
                <Intro />
                <AboutSocial />
                <Testominals />

            </Layout>
        </div >
    );
};

export default Index;