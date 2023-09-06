import React, { useEffect } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import HomeDegine from '../../Degines/Home/HomeDegine';
function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])

  return (
    <>
    <HomeDegine/>
    
        </>
  )
}

export default Home
