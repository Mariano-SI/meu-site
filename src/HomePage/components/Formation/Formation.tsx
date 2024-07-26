import React from 'react'
import { FormationStyled } from './Formation.style'
import FormationCard from '../FormationCard/FormationCard'
import { IFormation } from '../../interfaces/Formation'

function Formation() {

    const formation: IFormation[] = [
        {
            level: 'Bacharelado',
            title: 'Sistemas de Informação',
            institution: 'UFVJM'
        },
        {
            level: 'Empresário Júnior',
            title: 'Diretor',
            institution: 'Next Step Empresa Júnior'
        }
    ];


    return (
        <FormationStyled id='formation'>
            <div className='container contentArea'>
                <h2 className='subtitle'>Formação</h2>
                <div>
                    <p className='formation-text'>
                        Graduando em <strong>Sistemas de Informação na Universidade Federal dos Vales do Jequitinhonha e Mucuri - UFVJM</strong>. Iniciei minha graduação em 2020 e desde então venho me dedicando ao máximo para me tornar um profissional de qualidade.
                    </p>
                    <div className='formation-cards-container'>
                        {formation.map((formationInfo, index) => (
                            <FormationCard formationInfo={formationInfo} key={index} />
                            ))
                        }                   
                    </div>
                </div>

            </div>
        </FormationStyled>
  )
}

export default Formation