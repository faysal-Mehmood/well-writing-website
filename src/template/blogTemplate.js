import React, { useState, useEffect } from "react";
import Layout from '../components/layout'
import Blog from '../components/blog'
import '../components/layout/styles.scss'
import { Helmet } from "react-helmet"
const BlodDetail = ({ pageContext, footerPage ,redirecting,FooterPage2 }) => {
    const [blogNav , setBlogNav] = useState(false);
    const { alldata } = pageContext;
   

    const backColort = () => {
        if (window.scrollY > 100) {
            setBlogNav(true)
        } else {
            setBlogNav(false)
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', backColort);
    }, []);
    return (

        <div className = { blogNav ? "terms-page" : "bg-trasparent" } >
               <Helmet>
                <meta name="description" content={alldata?.frontmatter?.description?.slice(0, 50)} />
                <meta name="title" content="WELL-WRITTEN" />
                <meta property="og:title" content={alldata?.frontmatter?.title} />
                <meta property="og:description" content={alldata?.frontmatter?.description?.slice(0, 50)} />
                <meta property="og:image" content={alldata?.frontmatter?.featuredimage}  />
                <meta name="twitter:description" content={alldata?.frontmatter?.description?.slice(0, 50)} />
                <meta name="twitter:image" content={alldata?.frontmatter?.featuredimage}  />
            </Helmet>
            <Layout btnPage={'Blog'} FooterPage2={'Blog'} redirecting={'Blog'} >
                <Blog blogdetail ={alldata}/>
            </Layout>
        </div>
    )


};
export default BlodDetail;