import React, { useEffect } from 'react'
import PartsDegine from '../../Degines/Parts/PartsDegine'

function Parts() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
<PartsDegine/>
  )
}

export default Parts