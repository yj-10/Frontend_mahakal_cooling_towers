import React, { useEffect } from 'react'
import FooterDegin from '../../Component/Footer/FooterDegin'
import ProductDeggine from '../../Degines/Product/ProductDeggine'

function Product() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return (
<>
<ProductDeggine/>
</>
  )
}

export default Product