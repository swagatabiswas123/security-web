import React from 'react';
import './Header.css'




const Header = () => {
  return (
    <div className='Header'>
         <header>
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id=""/>
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#product">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#social">Social</a></li>
          </ul>
          <img class="logo" src='./sslogo.png' alt='logo'/>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header;