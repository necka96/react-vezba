import React from 'react';
import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import styled from 'styled-components';
import arrow from "../images/arrow.svg";
import img1 from "../images/img1.jpg";
import Button from './Button';
const HeaderContentStyle = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
padding-top: 3rem;
grid-gap: 30px;
margin-left: 15rem;
.white{
 color: #fff;
}
.left{
 place-self: center;
 color: var(--neutralna-svetla);
 h1{
  margin-bottom: 1rem;
 }
 p{
  margin-bottom: 1rem;
  
 }
 
}
.right{
 width: 100%;
 
 .img1{
  width: 90%;
  max-width: 300px;
  border-radius: 15px;
  transition: transform 0.5s;
  &:hover{
   transform: scale(0.7) rotate(15deg);
  }

 }

}

@media only screen and (max-width:1000px){
 margin-left: 0;
 
}
@media only screen and (max-width:690px){
 margin-left: 0;
 .media{
  display: none;
 }

`

function HeaderContent() {
 return (
  <HeaderContentStyle>
   <div className="left">
   <Pulse>
    <h1>Cvecara Flowers</h1>
   </Pulse>
   <p className="first white">
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit iusto! Deleniti quae architecto, autem quis omnis totam assumenda dicta sequi, facere nostrum, laborum eligendi voluptas magni aperiam ipsa reiciendis.
   </p>
   <p className="media white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ut recusandae natus optio. Ipsam consequuntur ea mollitia beatae qui aperiam architecto aliquid itaque aut enim! Consequuntur iusto corporis molestias, esse nulla itaque alias laboriosam rerum sit doloremque, quibusdam repudiandae ea.</p>
   <Button btnLink="./about" btnText="Read More" btnImg={arrow} />
   </div>
   <div className="right">
   <Fade right>
    <img src={img1} alt="ruze" className="img1" />
   </Fade>
   
   
   </div>
  </HeaderContentStyle>
 )
}

export default HeaderContent
