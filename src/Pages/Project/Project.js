import React, { useEffect } from "react";
import ProjectDegin from "../../Degines/Porject/ProjectDegin";

function Project() {
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  return <>
  <ProjectDegin/>
  
  </>;
}

export default Project;
