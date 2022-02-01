import React from 'react';
import './freelancerwritenote.scss';
import ReactMarkdown from 'react-markdown'
const Index = ({DescriptioData}) => {

  console.log(DescriptioData)

    return (
      <div className='freelancer-note'>
        <div className='freelancer-note-detail'>
          <h2>
            {DescriptioData.frontmatter.heading}
          </h2>
          <ReactMarkdown>
          {DescriptioData.frontmatter.description}
          </ReactMarkdown>
        </div>
      </div>
    );
  };

export default Index;
