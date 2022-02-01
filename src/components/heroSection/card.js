
import React, {
  useState,
} from 'react';
import Slider from 'react-slick';
import ReactMarkdown from 'react-markdown';
import monLogo from '../../assets/images/header-img.png';
import monLogo2 from '../../assets/images/monkeys/m2.svg';
import monLogo2b from '../../assets/images/monkeys/m2a.svg';
import monLogo1 from '../../assets/images/monkeys/G-m-1.svg';
import monLogo3 from '../../assets/images/monkeys/m3.svg';
import arrowM from '../../assets/images/Vector-4.svg';
import 'slick-carousel/slick/slick.css';


import 'slick-carousel/slick/slick-theme.css';

const Card =
  ({
    data,
  }) => {
    const [
      cardRead,
      setCardRead,
    ] =
      useState(
        'more'
      );

    let settings4 =
      {
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        cssEase:
          'linear',
        responsive:
          [
            {
              breakpoint: 768,
              settings:
                {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
            },
          ],
      };

    return (
      <Slider
        {...settings4}
        className='card_slider'
      >
        {data.map(
          (
            crntItem,
            index
          ) => {
            console.log(
              crntItem.cardDiscription
            );
            return (
              <div className='new-cards'>
                <a>
                  <div className='cards  '>
                    <div className='card-info '>
                      <img
                        className='card-img'
                        src={
                          crntItem.card_image
                        }
                        alt='monk'
                      />
                      <div className='cord-text'>
                        <p className='card-heading '>
                          {
                            crntItem.card_text
                          }
                        </p>
                        <p className='card-decription'>
                          {
                            crntItem.cardDiscription
                          }
                        </p>
                      </div>

                    </div>
                  </div>
                </a>
              </div>
            );
          }
        )}
      </Slider>
    );
  };

export default Card;
