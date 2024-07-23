import React from 'react'
import { ExperienceDescription } from '../../interfaces/ExperienceDescription';
import { ExperienceCardStyled } from './ExperienceCard.style';

interface IExperienceCardProps {
    experience: ExperienceDescription;
}

function ExperienceCard({experience}: IExperienceCardProps) {

  const {companyName, role, jobDescription, skills, date} = experience;  
  return (
    <ExperienceCardStyled>
        <span className='job-date'>{date}</span>
        <h3 className='company-name'>{companyName}</h3>
        <span className='company-name'>{role}</span>
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