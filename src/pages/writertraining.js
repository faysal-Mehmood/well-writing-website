import React from 'react';
import Layout from '../components/layout/';
import BannerSection from '../components/bannersection/';
import FreelancerWriteNote from '../components/freelancerwritenote/';
import FreelnacerWriteCourse from '../components/freelancerwritingcourse/';
import BackgroundImagePath from '../assets/images/writerimage/writingbook.jpg';
import { useStaticQuery, graphql } from 'gatsby';
const WriterTraining = () => {

  const writerData = useStaticQuery(graphql`
      query maneSection {
        allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            heading
            description
            cources_heading_one
            cources_heading_two
            courses_Detail {
              courses_Detail {
                courses_description
                courses_price
                courses_perks {
                  courses_perks {
                    perks
                  }
                }
              }
            }
          }
        }
      }
      }
      `);

      const {
        allMarkdownRemark: { nodes }
    } = writerData;
    const WriterTrainingData = nodes.filter(data => data.frontmatter.templateKey === 'writertraining')?.[0]
    console.log(WriterTrainingData);

    return (
      <div>
        <Layout  showBanner={
            true
          }>

        <FreelancerWriteNote DescriptioData={WriterTrainingData} />
        <FreelnacerWriteCourse CardsData={WriterTrainingData} />
        </Layout>
      </div>
    );
  };

export default WriterTraining;
