import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
// import LogoCont from './logocont'
import './styles.scss';


const Index =
  () => {
    const introData = useStaticQuery(graphql`
    query IntroSection {
              
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "short-introduction"}}}) {
      nodes {
        frontmatter {
          button_heading_top
          button_heading_medium
          button_heading_bottom
          templateKey
        }
      }
    }
    }`);
    console.log(introData);
    return (
      <>
        <div className='main-logosec'>
          <div className='paragref'>
            <div className='text'>
              <h4>
               {  introData?.allMarkdownRemark?.nodes[0]?.frontmatter?.button_heading_top}
              </h4>
              <hr className='hr-line' />
              <p className='text-p'>
              {  introData?.allMarkdownRemark?.nodes[0]?.frontmatter?.button_heading_medium}
              </p>
            </div>
            <hr className='hr-line' />
            <div className='text'>
              
              
              <p className='text-p'>
              {  introData?.allMarkdownRemark?.nodes[0]?.frontmatter?.button_heading_bottom}
              </p>
            </div>
          </div>
        </div>
        
      </>
    );
  };

export default Index;
