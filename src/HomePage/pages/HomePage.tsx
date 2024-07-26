import React from 'react'
import Introduction from '../../../public/static/images/Introduction'
import Experience from '../components/Experience/Experience'
import Formation from '../components/Formation/Formation'



function HomePage() {
  return (
    <div>
      <Introduction/>
      <Experience/>
      <Formation/>
    </div>
  )
}

export default HomePage