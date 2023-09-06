import React, { useEffect } from 'react'
// import FooterDegin from '../../Component/Footer/FooterDegin'
// import IndustriesComp from '../../Component/Industries/IndustriesComp'
import IndustriesDegine from '../../Degines/industries/IndustriesDegine'

function Industries() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (<>
<IndustriesDegine/>
    </>
  )
}

export default Industries