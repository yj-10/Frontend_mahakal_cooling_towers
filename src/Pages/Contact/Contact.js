import React, { useEffect } from 'react'


import FooterDegin from '../../Component/Footer/FooterDegin';
import ContactDegine from '../../Degines/Contact/ContactDegine';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (<>
<ContactDegine/>
<FooterDegin/>

  </>

  )
}

export default Contact
