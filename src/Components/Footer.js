import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../images/logo.png"
import { InnerLayout } from '../Layouts'

const FooterSyle = styled.footer`
padding: 0rem 4rem;
width: 100%;
background: #dce2f0;
.footer-container{
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
.left{
 place-self: center;
 text-align: center;
 p{
  margin-top: 10px;
  font-size: 1.2rem;
  color: #5f2992;
  
 }
}
.botton-nav{
 display: flex;
 justify-content:  space-evenly;
 align-items: center;
 li{
  padding: 0.7rem 0;
  a{
   font-size: 1.1rem;
 
  }
    &:nth-child(1){
    margin-top: 20px;
   }
 }
}
}


`
function Footer() {
 const [date, setDate]= useState()
 const getYerar = () => setDate(new Date().getFullYear())

 useEffect(() => {
  getYerar()
 }, [])
 return (
  <FooterSyle>
<InnerLayout>
<div className="footer-container">
   <div className="left">
      <img src={logo} alt="" />
      <p>&copy; Nemanja Djordjevic - {date} <br /> All rights reserved </p>
     
   </div>
   <Router>
    <ul className="botton-nav">
    <div className="link1">
    <li><Link to="./team">Team</Link></li>
    <li><Link to="./gallerty">Gallery</Link></li>
    <li><Link to="./news">News</Link></li>
    </div>
    <div className="link2">
    <li><Link to="./terms">Terms of use</Link></li>
    <li><Link to="./policy">Privacy Policy</Link></li>
    <li><Link to="./contact">Contact us</Link></li>
    </div>
    </ul>
   </Router>
</div>
</InnerLayout>
  </FooterSyle>
 )
}

export default Footer
