import React from 'react';
import './style.scss';
import CardImage from '../../assets/images/image-02.png';
import classNames from 'classnames';

const OurTeamCard =
  ({
    className,
    image,
    name,
    designation,
    jobDetail,
  }) => {
    const teamCard =
      classNames(
        'team-card',
        className
      );
    return (
      <div
        className={
          teamCard
        }
      >
        <div className='team-card-img'>
          <img
            src={
              image
            }
            alt='our team'
          />
        </div>
        <div className='team-card-detail'>
          <h5>
            {
              name
            }
          </h5>
          <span>
            {
              designation
            }
          </span>
          <p>
            {
              jobDetail
            }
          </p>
        </div>
      </div>
    );
  };

export default OurTeamCard;
