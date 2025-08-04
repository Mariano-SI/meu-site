import React from 'react'
import { ExperienceStyled } from './Experience.style'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import { ExperienceDescription } from '../../interfaces/ExperienceDescription'

function Experience() {
  const experiences: ExperienceDescription[] = [
    {
        companyName: 'ilegra',
        role: 'Desenvolvedor Pleno',
        jobDescription: 'Atuo em modelo outsourcing na PagoNxt, parte do grupo Santander, desenvolvendo IDPs (Internal Developer Portals) que aprimoram a organização do ecossistema de tecnologia e aumentam a eficiência dos profissionais de T.I das empresas do grupo. Meu trabalho envolve desenvolvimento backend e frontend, CI/CD e práticas de DevOps, contribuindo para automação, padronização e otimização dos fluxos de desenvolvimento. Entre as tecnologias que utilizo estão Node.js, TypeScript, Docker, Azure e Backstage.io. Além de desenvolver, participo ativamente do planejamento técnico, propondo soluções que reduzem tempo de entrega e melhoram a experiência dos times de engenharia.',
        date: '01/2025 - Atual',
        skills: ['Node.js', 'Azure', 'Docker', 'BackstageIO'],
        companyPhotos:['https://media.licdn.com/dms/image/v2/C4D0BAQHxuL9Y3B6-Ug/company-logo_200_200/company-logo_200_200/0/1660926816605/ilegra_logo?e=1756944000&v=beta&t=vUJJaW_HcKlo0QSqzA6PAOS14V8ZD2LTBvm6Cn6Lh9s', 'https://media.licdn.com/dms/image/v2/D4D0BAQFgl6M-ZPv0Dw/company-logo_200_200/company-logo_200_200/0/1707392681527/pagonxt_logo?e=1756944000&v=beta&t=oCK7UZZViQ0gWFUmp7lH5AqLcyOosg80QFvzfkSTrSM']
    },
    {
        companyName: 'Dti Digital',
        role: 'Desenvolvedor Líder',
        jobDescription: 'Atuei liderando a equipe responsável pelo desenvolvimento da plataforma interna Round. Minhas atividades incluíam o desenvolvimento de novas funcionalidades, atuação como referência técnica para o time, realização de code reviews e gerenciamento dos lançamentos semanais de releases. Nesse período, liderei a refatoração do modelo de e-commerce da plataforma e participei ativamente do planejamento e desenvolvimento de uma feature completa para mapeamento de habilidades dos funcionários (skill mapping).',
        date: '07/2024 - 01/2025',
        skills: ['CI/CD', 'React', 'Node.js', 'Infraestrutura', 'Cloud computing', 'Docker', 'Redis', 'Liderança de equipe', 'Planejamento de features',  'TypeScript', 'SQL', 'Docker', 'Git', 'Jest', 'Cypress'],
        companyPhotos: ['https://media.licdn.com/dms/image/v2/D4E0BAQHDojXmC8wClw/company-logo_200_200/B4EZY1JXKDG0AQ-/0/1744648369262/dtidigital_logo?e=1756944000&v=beta&t=AXV8IElHa_rfhx9J87M53eNlwIUCRKHRq9lGx37smSM']
    },
    {
        companyName: 'Dti Digital',
        role: 'Desenvolvedor FullStack',
        date: '04/2024 - 07/2024',
        jobDescription: 'Atuei principalmente no desenvolvimento de software utilizando as tecnologias Node e React.js juntamente ao Typescript. Além disso, em certos momentos atuei como desenvolvedor líder iterino como preparação para assumir o cargo de líder da equipe no futuro.',
        skills:['React', 'Node.js', 'TypeScript', 'SQL', 'Docker', 'Git', 'Jest', 'Cypress'],
        companyPhotos: ['https://media.licdn.com/dms/image/v2/D4E0BAQHDojXmC8wClw/company-logo_200_200/B4EZY1JXKDG0AQ-/0/1744648369262/dtidigital_logo?e=1756944000&v=beta&t=AXV8IElHa_rfhx9J87M53eNlwIUCRKHRq9lGx37smSM']
    },
    {
        companyName: 'Dti Digital',
        role: 'Estagiário de desenvolvimento fullstack',
        jobDescription: 'Atuei principalmente no desenvolvimento de software utilizando as tecnologias Node e React.js juntamente ao Typescript. Além disso, auxiliva minhas lideranças no planejamento de novas features do projeto e também, quando necessário, contribia com a equipe de produto nos processos de discovery que aconteciam frequentemente em meu contexto, algo bastante positivo pois me incentivava a sempre estar aprendendo novas coisas e assumir novas responsabilidades dentro da equipe.',
        date: '09/2022 - 05/2024',
        skills: ['React', 'Node.js', 'TypeScript', 'SQL', 'Docker', 'Git', 'Jest', 'Cypress'],
        companyPhotos: ['https://media.licdn.com/dms/image/v2/D4E0BAQHDojXmC8wClw/company-logo_200_200/B4EZY1JXKDG0AQ-/0/1744648369262/dtidigital_logo?e=1756944000&v=beta&t=AXV8IElHa_rfhx9J87M53eNlwIUCRKHRq9lGx37smSM']
    },
    {
        companyName: 'Empresa Júnior Next Step',
        role: 'Empresário Júnior - Diretor',
        jobDescription: 'Membro da NextStep, empresa júnior do curso de sistemas desde meu primeiro ano de faculdade. No início de 2022 tive a oportunidade de assumir o papel de diretor da empresa, uma experiência extremamente positiva que que refinou drasticamente a maneira na qual me enxergo, me posiciono e participo de uma equipe.',
        date: '08/2020 - 02/2023',
        skills: ['Liderança', 'HTML', 'CSS', 'Javascript', 'Wordpress'],
        companyPhotos:['https://media.licdn.com/dms/image/v2/C4E0BAQEq1ujMToBwJw/company-logo_200_200/company-logo_200_200/0/1676327270056/nextstepsi_logo?e=1756944000&v=beta&t=48gqrCK6mxOqLNw5T1rYwUVvMH77udrmksipaWMGpgs']
    },
    {
        companyName: 'Secretaria de Meio-Ambiente - SEMAD MG',
        role: 'Estagiário de TI ',
        jobDescription: 'Como Estagiário de TI na Secretaria de Estado de Meio-Ambiente e Desenvolvimento Sustentável (SEMAD), desenvolvi habilidades em treinamento de usuários e digitalização de documentos.',
        date: '06/2020 - 08/2022',
        skills: ['Comunicação assertiva', 'HTML', 'CSS', 'Javascript'],
        companyPhotos:['https://media.licdn.com/dms/image/v2/C4E0BAQG1bJHTCdjrMA/company-logo_200_200/company-logo_200_200/0/1635119757543?e=1756944000&v=beta&t=Qq8WImq4d2uXFWW0oF368yqnsRundIlxqE92HH6omCo']
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