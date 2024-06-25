import React from 'react'
import {FaGraduationCap} from "react-icons/fa"

const EducationCard = ({date, degree,  school}) => {
  return (
    <div className='education_card_container'>
        <div className='education_icon'>
            <FaGraduationCap/>
        </div>
        <div className='education_card_content'>
            <p>{date}</p>
            <h3>{degree}</h3>
            <p>{school}</p>
        </div>
    </div>
  )
}

export default EducationCard