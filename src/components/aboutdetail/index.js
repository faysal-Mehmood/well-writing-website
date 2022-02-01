import React from 'react';
import './aboutdetail.scss';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown'
const Index = () => {

  const aboutData = useStaticQuery(graphql`
      query HeroSection {
                
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "about"}}}) {
        nodes {
          frontmatter {
            title
            heading
            description
          }
        }
      }
      }`)

    return (
      <div className='about-detail'>
        <h3>
          {aboutData?.allMarkdownRemark?.nodes[0]?.frontmatter?.heading}
        </h3>
        <ReactMarkdown>
          {aboutData?.allMarkdownRemark?.nodes[0]?.frontmatter?.description}
        </ReactMarkdown>


      </div>
    );
  };

export default Index;
