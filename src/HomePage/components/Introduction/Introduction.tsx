import React from 'react'
import { IntroductionStyled } from './Introduction.style'
import eu from "../../../../public/static/images/eu.png"
import detalhe from "../../../../public/static/images/detalhe.svg"



function Introduction() {
  return (
    <IntroductionStyled className='introdution contentArea'>
        <img src={eu} alt="" className='main-picture image'/>
        <div className='title-container'>
          <img src={detalhe} alt="" className='detalhe' />
          <h1 className='title'>Mariano Silva Desenvolvedor </h1>
          <h1 className='fullstack typing-animation'>Fullstack :)</h1>
          <p>Diamantina - MG🧑🏻‍💻</p>
        </div>


    </IntroductionStyled>
  )
}

export default Introduction