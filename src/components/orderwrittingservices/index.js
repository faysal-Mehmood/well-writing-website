import React from 'react';
import ServicesCard from './servicescard';
import './style.scss';
import {
  useStaticQuery,
  graphql,
} from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Image1 from '../../assets/images/wallImages/one.png';
import Image2 from '../../assets/images/wallImages/teo.png';
import Image3 from '../../assets/images/wallImages/three.png';
import Image4 from '../../assets/images/wallImages/fore.png';
import Image5 from '../../assets/images/wallImages/five.png';
import Image6 from '../../assets/images/wallImages/six.png';

import {
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
} from './service-card-description';
const Index =
  () => {
    const WritingServices =
      useStaticQuery(graphql`
        query WritingServicesContent {
          allMarkdownRemark(
            filter: {
              frontmatter: {
                title: {
                  eq: "WRITING SERVICES"
                }
              }
            }
          ) {
            nodes {
              frontmatter {
                heading
                description
                all_services {
                  service {
                    service_description
                    service_image
                    servicediscription
                  }
                }
              }
            }
          }
        }
      `);
    return (
      <div className='writting-services'>
        <div className='writting-services-detail'>
          <h2>
            {
              WritingServices
                ?.allMarkdownRemark
                ?.nodes[0]
                ?.frontmatter
                ?.heading
            }
          </h2>
          <ReactMarkdown>
            {
              WritingServices
                ?.allMarkdownRemark
                ?.nodes[0]
                ?.frontmatter
                ?.description
            }
          </ReactMarkdown>
        </div>
        <div className='writting-services-card'>
          <div className='services-card-title'>
            <h3>
              WRITING
              SERVICES.
            </h3>
          </div>
          <div className='services-card-items'>
            {WritingServices?.allMarkdownRemark?.nodes[0]?.frontmatter?.all_services?.service?.map(
              cardData => {
                return (
                  <ServicesCard
                    image={
                      cardData.service_image
                    }
                    title={
                      cardData.service_description
                    }
                    description={
                      cardData.servicediscription
                    }
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  };

export default Index;
