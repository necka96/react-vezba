import React from 'react';
import Pulse from 'react-reveal/Pulse';
import styled from 'styled-components';
import card from "../images/card.png";
import { InnerLayout } from '../Layouts';
const CardStyile = styled.section`
.card-container{
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 grid-gap: 10px;
 
 .card-text{
  place-self: center;

  p{
   padding:  1rem 0;
  }
 }
 .card-right{
  width: 100%;
  height: 100%;
  img{
   width: 100%;
   height: 100%;
  }
 }
}
`;

function CardSection() {
 return (
  <CardStyile>
   <InnerLayout>
  <div className= "card-container">
     <div className="card-text">
     <Pulse>
     <h2 className="secondary-heading">It is possible to pay by card </h2>
     </Pulse>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laudantium hic eius obcaecati voluptatem sint. Ipsum obcaecati, libero earum soluta rem aliquid inventore ratione officiis.</p>
     </div>
     <div className="card-right">
     <img src={card} alt="" />
     </div>
  </div>
   </InnerLayout>
  </CardStyile>
 )
}

export default CardSection
