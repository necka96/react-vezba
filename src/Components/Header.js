import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import bg from "../images/bg.svg";
import HeaderContent from './HeaderContent';
import NavMenu from './NavMenu';
const HeaderStyle = styled.header`
height: 120vh;
width: 100%;
background: url(${bg}) no-repeat center ;

background-size: cover;
.header-content{
 padding: 0 5rem;
}
`;


function Header() {
 return (
  <HeaderStyle>
   <div className="header-content">
     <Router>
      <NavMenu/>
      <HeaderContent/>
     </Router>
     
     
   </div>
   
  </HeaderStyle>
 )
}

export default Header
