import React, { useEffect } from 'react'
import LaborateryDegine from '../../Degines/R & D Laboratery/LaborateryDegine'

function Laboratery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
<>
<LaborateryDegine/>
</>  )
}

export default Laboratery