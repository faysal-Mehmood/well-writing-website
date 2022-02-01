import React, {
  useState,
  useEffect,
} from 'react';
import CourseCard from './coursecard';
import {
  card1Data,
  card2Data,
  card3Data,
} from './carddata';
import './style.scss';
const Index = ({CardsData ,curItem}) => {
   console.log(CardsData)
    return (
      <div className='course-container'>
        <div className='course-detail'>
          <div className='course-title'>
            <h4>
             {CardsData.frontmatter.cources_heading_one}
            </h4>
            <span>
            <h4>
            {CardsData.frontmatter.cources_heading_two}
            </h4>
            </span>
          </div>
          <div className='course-cards'>
            {CardsData.frontmatter.courses_Detail.courses_Detail.map(curItem => {
              return(
                <CourseCard
                courseTitle={curItem.courses_description}

                courseFeatures={
                  curItem
                }
                coursePrice={curItem.courses_price.slice(0,4)}
                courseAcademy={curItem.courses_price.slice(4,curItem.courses_price.length)}
                className='course-cards-margin'
              />
              )
              })}
{/*
            <CourseCard
              courseTitle='How to Teach English Online & Earn Decent Money'
              courseFeatures={
                card2Data
              }
              coursePrice='$15'
              courseAcademy='UDEMY COURSE'
              className='course-cards-margin'
            />
            <CourseCard
              courseTitle='How to Make Money Blogging Online'
              courseFeatures={
                card3Data
              }
              coursePrice='$15'
              courseAcademy='AMAZON BOOK'
              className='course-cards-margin'
            /> */}
          </div>
        </div>
      </div>
    );
  };

export default Index;
