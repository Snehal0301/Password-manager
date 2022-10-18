import React from 'react'
import './Header.css'
 
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="nav">
          <div className="nav-logo">
            <img src={require('../../assets/images/pass_logo.png')} alt="" />
          </div>
          <div className="options">
            <img src={require('../../assets/images/sync.png')} alt="" />
            <img src={require('../../assets/images/profile.png')} alt="" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header