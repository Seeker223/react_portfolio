import React from 'react'
import educationImage from "../assest/img/education.gif"
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div className='eduction ' id='education'>
          <h1 className='heading'>Education</h1>
          <div className='education_content'>
            <div className='education_left'>
              <EducationCard date="june 2024" degree="MLops" school="ineuron"/>
              <EducationCard  date="june 2024" degree="june 2024" school="ineuron"/>
              <EducationCard />
            </div>
            <div className='education_right'>
              <div className='education_image'>
                <img src={educationImage} />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Education