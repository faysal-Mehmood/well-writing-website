import React from 'react';
import './bannersection.scss';
import YouTube from '../../assets/images/writerimage/youtube_icon.svg';
import Instagram from '../../assets/images/writerimage/instagram_icon.svg';
import Pinterest from '../../assets/images/writerimage/pinterest_icon.svg';
import Facebook from '../../assets/images/writerimage/facebook_icon.svg';
import Twitter from '../../assets/images/writerimage/twitter_circle_icon.svg';
import icon1 from '../../assets/images/wallImages/scIcon_1.png';
import icon2 from '../../assets/images/wallImages/scIcon_2.png';
import icon3 from '../../assets/images/wallImages/scIcon_3.png';
import icon4 from '../../assets/images/wallImages/scIcon_4.png';
import icon5 from '../../assets/images/wallImages/scIcon_5.png';
import { useStaticQuery, graphql} from 'gatsby';


const Index = () => {

  const bannerData = useStaticQuery(graphql`
  query bannerSection {

    allMarkdownRemark {
    nodes {
      frontmatter {
        templateKey
        hero_Image
        heading
        social_media {
          media {
            social_icon
            social_link
          }
        }
      }
    }
  }
  }`)
const {
  allMarkdownRemark: { nodes }
} = bannerData;

const banerHeading = nodes.filter(data => data.frontmatter.templateKey === 'banner')?.[0]
const banerIcon = nodes.filter(data => data.frontmatter.templateKey === 'social-media')?.[0]
console.log(banerHeading);

  return (
      <div
        className='banner-section'
        style={{
          backgroundImage: `url(${banerHeading.frontmatter.hero_Image})`,
        }}
      >
        <div className='banner-section-bg'>
          <div className='banner-section-detail'>
            <h1>
              {banerHeading.frontmatter.heading}
            </h1>
            <div className='banner-section-icons'>
              {banerIcon.frontmatter.social_media.media.map(cruItem => {
                return(
                 <a href={cruItem.social_link} target='_blank'>
                    <img className='icons'src={ cruItem.social_icon} alt='dfdf'/>
                 </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Index;
