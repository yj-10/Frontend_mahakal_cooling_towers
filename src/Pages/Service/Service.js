import React, { useEffect } from 'react'
import ServiceDegine from '../../Degines/services/ServiceDegine'


function Service() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
 <>

<ServiceDegine/>



 </>
  )
}

export default Service