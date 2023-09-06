import React, { useEffect } from 'react'
import AboutDegines from '../../Degines/About/AboutDegines'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
<>


<AboutDegines/>

</>
 
  )
}

export default About
