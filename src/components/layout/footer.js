import React from 'react';
import {
  useStaticQuery,
  graphql,
} from 'gatsby';

const Footer =
  () => {
    const footerSection =
      useStaticQuery(graphql`
    query footerSection {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "footer"}}}) {
        nodes {
          frontmatter {
            headingonw
            headingtwo
          }
        }
      }
    }
  `);
    return (
      <>
        <div className='footer'>
          <p className='fotter-heading'>
            {footerSection?.allMarkdownRemark?.nodes[0]?.frontmatter?.headingonw}
          </p>

          <p className='footer-date'>
            {footerSection?.allMarkdownRemark?.nodes[0]?.frontmatter?.headingtwo}
          </p>
        </div>
      </>
    );
  };

export default Footer;
