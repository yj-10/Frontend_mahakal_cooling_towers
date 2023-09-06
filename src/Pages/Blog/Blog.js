import React, { useEffect } from 'react'
import BlogDegine from '../../Degines/Blog/BlogDegine'


function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
  <BlogDegine/>
      
    </div>
  )
}

export default Blog
