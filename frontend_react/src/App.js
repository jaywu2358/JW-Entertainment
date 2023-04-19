import React from 'react'
import {About, Footer, Service, Header, History, Cases } from './container';
import { NavBar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Service />      
      <History /> 
      <Cases/>     
      <Footer />
    </div>
  )
}

export default App