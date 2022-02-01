 import React from 'react';
import OurTeamCard from './ourteamcard';
import { useStaticQuery, graphql } from 'gatsby';
import './style.scss';

const Index =() => {
    const teamData = useStaticQuery(graphql`
    query TeamSection {
              
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "team"}}}) {
      nodes {
        frontmatter {
          teammember {
            team {
              Member_Designation
              Member_Discription
              Member_Name
              Member_image
            }
          }
          title
          heading
          description
          templateKey
        }
      }
    }
    }`);
   

console.log(teamData);

    return (
      <div className='our-team'>
        <div className='our-team-title'>
          <h4>
          {teamData?.allMarkdownRemark?.nodes[0]?.frontmatter?.heading}
          </h4>
          <p>
          {teamData?.allMarkdownRemark?.nodes[0]?.frontmatter?.description}
          </p>
        </div>
        <div className='our-team-cards'>
       {
          teamData?.allMarkdownRemark?.nodes[0]?.frontmatter?.teammember?.team.map((team)=>{
            return(
              <>
            <OurTeamCard
            
            image={
              team.Member_image
            }
            name={team.Member_Name}
            designation={team.Member_Designation}
            jobDetail={team.Member_Discription}
          />
          
          </>
            )
          })
       }
          
         
         
        </div>
      </div>
    );
  };

export default Index;
