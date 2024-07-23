import React from 'react'
import { IntroductionStyled } from './Introduction.style'

type Props = {}

function Introduction({}: Props) {
  return (
    <IntroductionStyled className='introdution'>
        <img src="/src/assets/eu.jpg" alt="" className='main-picture image'/>
        <div>
          <h1 className='title'>Mariano Silva Desenvolvedor </h1>
          <h1 className='fullstack typing-animation'>Fullstack :)</h1>
          <p>Diamantina - MG🧑🏻‍💻</p>
        </div>


    </IntroductionStyled>
  )
}

export default Introduction