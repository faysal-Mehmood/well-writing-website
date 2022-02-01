import React from 'react';
import classNames from 'classnames';
import './style.scss';
import Image1 from '../../assets/images/wallImages/one.png';

const ServicesCard =
  ({
    className,
    image,
    title,
    description,
  }) => {
    const servicesCard =
      classNames(
        'services-card',
        className
      );
    return (
      <div
        className={
          servicesCard
        }
      >
        <div className='services-card-image'>
          <img
            src={
              image
            }
          />
        </div>
        <div className='services-card-name'>
          <h6>
            {
              title
            }
          </h6>
        </div>
        <div className='services-card-detail'>
          <p>
            {
              description
            }
          </p>
        </div>
      </div>
    );
  };

export default ServicesCard;
