import React, { useState } from 'react';
import { MdClose, MdMenu } from "react-icons/md";
import { Fade } from "react-reveal";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../images/logo.png";
const NavStyle = styled.nav`
position: relative;
z-index: 100;
top: 0;
left: 0;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
ul{
 max-width: 1200px;
 width: 90%;
 margin: 0 auto;
 display: flex;
 justify-content: center;
 align-items: center;
 li{
  a{
   padding: 1rem 2rem;
   font-size: 2rem;
   color: var(--neutralna-svetla);
   text-decoration: none;
   outline: none;
   transition: 0.5s;
   &:hover{
    color: var(--crna-primarna);
   }
   
  }
  .active{
    color: greenyellow;
   }
 }

}
.menu-icon{
 position: absolute;
 right: -3rem;
 top: 1rem;
 width: 3rem;
 font-size: 3rem;
 cursor: pointer;
 outline: none;
 display: none;
 *{
  pointer-events: none;
 }
}
.close-icon{
 display: none;
}
@media only screen and (max-width: 768px){
 padding: 1rem 0;
 .hide-item{
  transform: translateY(calc(-100% - var(--top)));
 }
 .menu-icon{
  display: block;
 }
 .navItem{
  --top: 1rem;
  position: absolute;
  max-width: 300px;
  transition: 0.3s ease transform;
  width: 90%;
  flex-direction: column;
  background: red;
  padding: 2rem;
  top: var(--top);
  right: -3rem;
  .close-icon{
   display: block;
   margin: 0 0 0 auto;
   font-size: 3rem;
   cursor: pointer;
   *{
    pointer-events: none;
   }
  }
  li{
   display: block;
   margin-bottom: 10px;
  }
 }
}

`;
function NavMenu ()  {
 const[showNav, setShowNav] = useState (false)
 return (
   <Fade left>
  <NavStyle>
   <div className="log"><img src={Logo} alt="logo" /></div>
  <div className="menu-icon"
  onClick = {()=> setShowNav (!showNav)}
  role= "button"
  
  >
  <MdMenu/>
  </div>
   <ul className={! showNav ? "navItem hide-item" : "navItem"}>
   <div className="close-icon" onClick = {()=> setShowNav (!showNav)}
  role= "button">
   <MdClose/>
   </div>
  <li><NavLink to="/" exact onClick = {()=> setShowNav (!showNav)}
  role= "button">Home</NavLink></li>
  <li><NavLink to="/about" onClick = {()=> setShowNav (!showNav)}
  role= "button">About</NavLink></li>
  <li><NavLink to="/pricing" onClick = {()=> setShowNav (!showNav)}
  role= "button">Pricing</NavLink></li>   
   </ul>
  </NavStyle>
  </Fade>
 )
}

export default NavMenu 
