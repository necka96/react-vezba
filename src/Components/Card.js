import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
background: #fff;
padding: 3rem 2rem;
border-radius: 50px;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

h4{
 font-size: 2rem;
 text-align: center;
 padding: 1rem 0;
 span{
  font-size: 1.5rem;
  color: gray;
 }

}
.text{
 text-align: center;
}
.btn{
 text-align: center;
 padding: 1rem 0;
 button{
  border: 2px solid black;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  background: transparent;
  border-radius: 20px;
  font-size: inherit;
  transition: 1s;
  &:hover{
   background: lawngreen;
  }
 }
}
.card-container2{

 display: flex;
 justify-content: center;
 align-items: center;

 img{
  width: 70%;
 }
}
.plan-conteiner{
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 1rem 0;
  img{
   padding: 0 0.2rem;
  }
}
.text-check{
 display: flex;
 align-items: center;
 padding: 0.4rem 0;


 img{
  padding-right: .4rem;
  width: 20px;


 }
   &:nth-child(4){
   color: ${(props)=>props.color ? "#b7b7b7" : " var(--pink)"};
  }
   &:nth-child(5){
    color: ${(props)=>props.color ? "#b7b7b7" : " var(--pink)"};
  }
    &:nth-child(6){
    color: ${(props)=>props.color ? "#b7b7b7" : " var(--pink)"};
  }
}
`
function Card({
 account, amount, text, button, image, active, inactive, check, checkDis, text1, text2, text3, text4, text5, text6, color
}) {
 return (
  <CardStyle color={color}>
   <h4 className="card-title">{account}</h4>
   <h4 className="price">{amount} <span>/ m</span></h4>
   <p className="text">{text}</p>
 <div className="btn">
    <button>{button}</button>
 </div>
   <div className="card-container2">
    <img src={image} alt="" />
   </div>
   <div className="plan-conteiner">
   <img src={active} alt="" />
   <img src={inactive} alt="" />
   </div>
   <div className="list-container">
    <p className="text-check">
    <img src={check} alt="" />
    {text1}
    </p>
     <p className="text-check">
    <img src={check} alt="" />
    {text2}
    </p>
     <p className="text-check">
    <img src={check} alt="" />
    {text3}
    </p>
     <p className="text-check">
    <img src={checkDis} alt="" />
    {text4}
    </p>
     <p className="text-check">
    <img src={checkDis} alt="" />
    {text5}
    </p>
     <p className="text-check">
    <img src={checkDis} alt="" />
    {text6}
    </p>
   </div>
  </CardStyle>
 )
}

export default Card
