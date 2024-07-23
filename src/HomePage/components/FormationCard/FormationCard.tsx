import React from 'react'
import { IFormation } from '../../interfaces/Formation';
import { FormationCardStyled } from './FormationCard.style';

interface IFormationCardProps{
    formationInfo: IFormation;
}

function FormationCard({formationInfo}: IFormationCardProps) {

  return (
    <FormationCardStyled>
        <span className='formation-level'>{formationInfo.level}</span>
        <h3 className='formation-title'>{formationInfo.title}</h3>
        <span className='formation-institution'>{formationInfo.institution}</span>
    </FormationCardStyled>
  )
}

export default FormationCard