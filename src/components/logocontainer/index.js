import React from 'react';
// import UserSection from './usersection';
import icon1 from '../../assets/images/wallImages/scIcon_1.png';
import icon2 from '../../assets/images/wallImages/scIcon_2.png';
import icon3 from '../../assets/images/wallImages/scIcon_3.png';
import icon4 from '../../assets/images/wallImages/scIcon_4.png';
import icon5 from '../../assets/images/wallImages/scIcon_5.png';
import { useStaticQuery, graphql } from 'gatsby';
// import LogoCont from './logocont'
import './styles.scss';


const Index =
  () => {
    const socialLinks = useStaticQuery(graphql`
    query SocialLinkSection {
              
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "social-media"}}}) {
      nodes {
        frontmatter {
          social_media {
            media {
              social_icon
              social_link
            }
          }
          templateKey
        }
      }
    }
    }`);
    console.log(socialLinks);
    return (
      <>
       
        <div className='apply-sec'>
          <div className='apply-text'>
            <div className='apply-link'>
              <div className='footer'>
                <p className='fotter-heading'>
                  WELL-WRITTEN
                </p>
                <div className='fot-src'>
                
                {
          socialLinks?.allMarkdownRemark?.nodes[0]?.frontmatter?.social_media?.media.map((link)=>{
            return(
              
             <a
             target="_blank"
                    href={link.social_link}
                    className='fotter-icon'
                  >
                    <img
                      src={
                        link.social_icon
                      }
                      alt='skd'
                    />
                  </a>
          
          
            )
          })
       }
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  };

export default Index;
