import React from 'react'
import { IntroductionStyled } from '../../../src/HomePage/components/Introduction/Introduction.style'



function Introduction() {
  return (
    <IntroductionStyled className='introdution contentArea'>
        <img src="/public/static/images/eu.png" alt="" className='main-picture image'/>
        <div>
          <h1 className='title'>Mariano Silva Desenvolvedor </h1>
          <h1 className='fullstack typing-animation'>Fullstack :)</h1>
          <p>Diamantina - MG🧑🏻‍💻</p>
        </div>


    </IntroductionStyled>
  )
}

export default Introduction