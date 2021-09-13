import React from 'react';
import styled from 'styled-components';
import arrow from "../images/arrow.svg";
import bot from "../images/blob_bottom.svg";
import top from "../images/blob_top.svg";
const BtnStyle = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem 2rem;
border-radius: 20px;
cursor: pointer;
border: none;
outline: none;
background: var(--crna-primarna);
color: #fff;
position: relative;
transition: 1s;
&:hover{
 background: #7E007B;
 .top{
  transform: translateX(-69%);
 }
 .bot{
  transform: translateX(50%);
 }
}
.arrow{
 padding-left: 0.6rem;
 filter: invert(1);
}
.top{
 position: absolute;
 top: 0;
 right: -10px;
 transition: 1s;
}
.bot{
 position: absolute;
 bottom: 0;
 left: 20px;
  transition: 1s;
}

`
function AnimatedBtn({name}) {
 return (
  <BtnStyle>
   {name}
   <img src={arrow} className="arrow" alt="strelica" />
   <img src={top} alt="" className="top"/>
   <img src={bot} alt="" className="bot" />
  </BtnStyle>
 )
}

export default AnimatedBtn
