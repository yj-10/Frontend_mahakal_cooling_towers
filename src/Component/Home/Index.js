import React from 'react';
import About from './About';
import Achievements from './Achievements';
import Banner from './Banner';
import Clients from './Clients';
import Counter from './Counter';
import Delivered from './Delivered';
import Products from './Products';
import Team from './Team';
import WhatClient from './WhatClient';
import Client_too from './Client_too';
const Index = () => {
  return (
    <>
      <Banner />
      <About />
      <Counter />
      <Products />
      <Delivered />
      <Clients />
      <Client_too/>
      <Achievements />
      <WhatClient />
      <Team />
    </>
  )
}

export default Index