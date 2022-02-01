import React from 'react';
import classNames from 'classnames';
import './style.scss';
const CourseCard =
  ({
    courseTitle,
    courseFeatures,
    coursePrice,
    courseAcademy,
    className,
  }) => {
    const cardContainer =
      classNames(
        'card-container',
        className
      );
    return (
      <div
        className={
          cardContainer
        }
      >
        <div className='freelance-course-title'>
          <h4>
            {
              courseTitle
            }
          </h4>
        </div>
        <div className='freelance-course-features'>
          <ul>
            {courseFeatures.courses_perks.courses_perks.map(
              (
                list,
                index
              ) => {
                return (
                  <li>
                    {
                      list.perks
                    }
                  </li>
                );
              }
            )}
            {/* <li>
              2
              HOUR
              COURSE
            </li>
            <li>
              CREATING
              WRITING
              SAMPLES
            </li>
            <li>
              DIFFERENT
              TYPES
              OF
              CONTENT
            </li> */}
          </ul>
        </div>
        <div className='freelance-course-price-academy'>
          <span>
            {
              coursePrice
            }
          </span>
          <span>
            {
              courseAcademy
            }
          </span>
        </div>
        <div className='freelance-course-btn'>
          <button>
            Buy
            Now
          </button>
        </div>
      </div>
    );
  };

export default CourseCard;
