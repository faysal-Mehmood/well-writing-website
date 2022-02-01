import React from 'react';
import Slider from 'react-slick';
import ReactMarkdown from 'react-markdown'
import dotimg from '../../assets/images/colon-user.svg'
import { useStaticQuery, graphql } from 'gatsby';
const Testomnials =
  () => {
    const data = useStaticQuery(graphql`
    query testtominialLink {
              
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "Testominials"}}}) {
        nodes {
          frontmatter {
            
            testonomials_intro {
              testonomials_heading {
                author_discription
                testonomials_heading
              }
            }
            testonomial_heading_one
          }
        }
      }
    }`);
    console.log(data);

    let settings =
    {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true,
    };
    return (
      <div
        style={{
          marginBottom:
            '50px',
        }}
      >
        <div className='user-contener'>

          <h6 className='user-heading'>
            <ReactMarkdown>
              {data?.allMarkdownRemark?.nodes[0]?.frontmatter?.testonomial_heading_one}
            </ReactMarkdown>
          </h6>

          <div className='user-detal'>
            <div className='user-flex'>
              <Slider
                {...settings}
              >
                {data?.allMarkdownRemark?.nodes[0]?.frontmatter?.testonomials_intro.testonomials_heading.map(
                  (
                    cruItem,
                    index
                  ) => {
                    return (
                      <div className='usr-bor'>
                        <h4>
                          {cruItem.testonomials_heading}
                        </h4>
                        <br />
                        <p className='user-descrp'>
                          {cruItem.author_discription}

                        </p>
                        <div className='user-img'></div>
                      </div>
                    );
                  }
                )}
              </Slider>
              <div />
            </div>
          </div>
          <div className='second-comma'>
            <img
              src={
                dotimg
              }
              alt='imgs'
            />
          </div>
        </div>
      </div>
    );
  };

export default Testomnials;
