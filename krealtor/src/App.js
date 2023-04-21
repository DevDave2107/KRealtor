import React from 'react'
import {Welcome,Testimony,Socialmedia,Listings,Cta,Contact,Blog,About} from './containers';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Welcome />
      <About />
      <Listings />
      <Cta />
      <Contact />
      <Testimony />
      <Socialmedia />
      <Blog />
      <Footer />
     
    </div>
  )
}

export default App