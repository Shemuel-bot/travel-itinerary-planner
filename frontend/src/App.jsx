import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  

  return (
    <>
      <header>
        <img className='logo' src={logo} alt="" />

        <span className='guide'>
          <button>thing</button>
          <button>thing</button>
          <button>thing</button>
          <button>thing</button>
          <button>thing</button>
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
    </>
  )
}

export default App
