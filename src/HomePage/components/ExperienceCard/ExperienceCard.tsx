import React from 'react'
import { ExperienceDescription } from '../../interfaces/ExperienceDescription';
import { ExperienceCardStyled } from './ExperienceCard.style';

interface IExperienceCardProps {
    experience: ExperienceDescription;
}

function ExperienceCard({experience}: IExperienceCardProps) {

  const {companyName, role, jobDescription, skills, date, companyPhotos} = experience;  
  return (
    <ExperienceCardStyled>
        <span className='job-date'>{date}</span>
        <div>
          <h3 className='company-name'>{companyName}</h3>
          <span className='company-role'>{role}</span>
        </div>
        <div className='images-container'>
            {companyPhotos.map((companyPhoto) => (
              <div className='company-image'>
                <img src={companyPhoto} alt="" />
              </div>
            ))}
        </div>
        <p className='job-description'>{jobDescription}</p>
        <ul className='job-skills'>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </ExperienceCardStyled>
  )
}

export default ExperienceCard