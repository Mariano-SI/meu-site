import React from 'react'
import { ExperienceStyled } from './Experience.style'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import { ExperienceDescription } from '../../interfaces/ExperienceDescription'



function Experience() {

  const experiences: ExperienceDescription[] = [
    {
        companyName: 'Dti Digital',
        role: 'Desenvolvedor Líder Iterino',
        jobDescription: 'Comando a equipe que desenvolve uma plataforma interna chamada Round. Minha atuação no projeto envolve o desenvolvimento de features, servir como referência técnica para o resto da equipe, realizar code-reviews e lançamento de releases semanais.',
        date: '06/2024 - Atual',
        skills: ['React', 'Node.js', 'TypeScript', 'SQL', 'Docker', 'Git', 'Jest', 'Cypress']
    },
    {
        companyName: 'Dti Digital',
        role: 'Estagiário de desenvolvimento',
        jobDescription: 'Atuei principalmente no desenvolvimento de software utilizando as tecnologias Node e React.js juntamente ao Typescript. Além disso, auxiliva minhas lideranças no planejamento de novas features do projeto e também, quando necessário, contribia com a equipe de produto nos processos de discovery que aconteciam frequentemente em meu contexto, algo bastante positivo pois me incentivava a sempre estar aprendendo novas coisas e assumir novas responsabilidades dentro da equipe.',
        date: '09/2022 - 06/2024',
        skills: ['React', 'Node.js', 'TypeScript', 'SQL', 'Docker', 'Git', 'Jest', 'Cypress']
    },
    {
        companyName: 'Empresa Júnior Next Step',
        role: 'Empresário Júnior - Diretor',
        jobDescription: 'Membro da NextStep, empresa júnior do curso de sistemas desde meu primeiro ano de faculdade. No início de 2022 tive a oportunidade de assumir o papel de diretor da empresa, uma experiência extremamente positiva que que refinou drasticamente a maneira na qual me enxergo, me posiciono e participo de uma equipe.',
        date: '08/2020 - 02/2023',
        skills: ['Liderança', 'HTML', 'CSS', 'Javascript', 'Wordpress']
    },
    {
        companyName: 'Secretaria de Meio-Ambiente - SEMAD MG',
        role: 'Estagiário de TI ',
        jobDescription: 'Como Estagiário de TI na Secretaria de Estado de Meio-Ambiente e Desenvolvimento Sustentável (SEMAD), desenvolvi habilidades em treinamento de usuários e digitalização de documentos.',
        date: '06/2020 - 08/2022',
        skills: ['Comunicação assertiva', 'HTML', 'CSS', 'Javascript']
    },
    
  ]  
  return (
    <ExperienceStyled aria-label='Experiência' id='experience' className='contentArea'>
        <h2 className='subtitle'>Experiência</h2>
        <div>
            <p className='experience-text'>
                <strong>Desenvolvedor FullStack</strong> e graduando em <strong>Sistemas de Informação na Universidade Federal dos Vales do Jequitinhonha e Mucuri - UFVJM</strong>. Atuo no mercado de desenvolvimento desde o início 2022 quando comecei minha carreira na Dti Digital, uma das maiores consultorias de T.I do país. 
            </p>
            {experiences.map((experience) => (
                <ExperienceCard experience={experience} />
            ))}
        </div>
        
    </ExperienceStyled>
  )
}

export default Experience