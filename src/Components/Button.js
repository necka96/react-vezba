import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const  ButtonStyle = styled.div`
.btn{
 /* font-size: 1.2rem; */
 background: ${(props)=> props.outline ? "transparent" : "#0AD3FF" };
 display: inline-flex;
 justify-content: center;
 align-items: center;
 padding: 0.5rem 1rem;
 border-radius: 20px;
 border: 2px solid black;
 color: ${(props)=>props.outline ? "#333" : "#000"};
 cursor: pointer;
 transition: 1s;
 img{
  padding-left: 0.6rem;
 }
 &:hover{
  background: #DE9E36;
 }
}

`
function Button({
 btnLink = "Neki tekst",
 btnText = "Drugi tekst",
 outline = false,
 btnImg = "slika"
}) {
 return (
  <ButtonStyle outline= {outline}>
   <Link className="btn" to={btnLink}>{btnText} <img src={btnImg} alt="strelica" /></Link>
  </ButtonStyle>
 )
}

export default Button
