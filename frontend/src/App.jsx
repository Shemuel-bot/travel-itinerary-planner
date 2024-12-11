import { useState } from 'react'
import logo from './assets/logo.png'
import img1 from './assets/images/pexels-apasaric-1285625.jpg'
import './App.css'

function App() {
  

  return (
    <>
      <header>
        <img className='logo' src={logo} alt="" />

        <span className='guide'>
          <button className="guide-button">
            <h3>
            <h3>Thing</h3></h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>
        </span>

        <span className='sign-in-options'>
          <button className='log-in'>
            <h3>Log in</h3>
          </button>
          <button className='sign-up'>
            <h3>Sign up</h3>
          </button>
        </span>
      </header>


      <main>
        <div className='introduction'>
          <h1>Plan Your next big trip</h1>
          <img src={img1} alt="" className='trip-images'/>
        </div>
        <div></div>
        <div></div>
      </main>
    </>
  )
}

export default App
