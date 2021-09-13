import React from 'react'
import Pulse from 'react-reveal/Pulse'
import styled from 'styled-components'
import active from "../images/active.svg"
import check from "../images/check.svg"
import card from "../images/creditcard.svg"
import dis from "../images/disabled.svg"
import inactive from "../images/inactive.svg"
import { InnerLayout } from '../Layouts'
import Card from './Card'
const PaymentStyle = styled.section`
.center{
 text-align: center;
 margin: 20px 0;
}
.card-container{

 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 grid-gap: 30px;

}
`

function PaymentSection() {
 return (
  <PaymentStyle>
   <InnerLayout>
    <Pulse>
       <h3 className="small-heading">You can use our photos on <span>your website</span></h3>
    </Pulse>
     <p className="center">Start with our free plan and switch to premium as you grow </p>
     <div className="card-container">
      <Card
      color = {true}
      account={"Free"}
      amount = {"$0"}
      text = {"Organize your website with our pictures from the free package "}
      button = {"Get Stared"}
      image = {card}
      active= {active}
      inactive = {inactive}
      check = {check}
      checkDis = {dis}
      text1 = {"You have limited access to our photos"}
      text2= {"You can download 10 photos a week"}
      text3 = {"You must mention us on your site"}
      text4 = {"You have unlimited access to our photos"}
      text5 = {"You can download as many pictures as you want"}
      text6 = {"You don't have to mention us on your site"}
      />
       <Card
      account={"Premium"}
      amount = {"$10"}
      text = {"Organize your website with our pictures from the free package "}
      button = {"Get Stared"}
      image = {card}
      active= {active}
      inactive = {inactive}
      check = {check}
      checkDis = {check}
      text1 = {"You have limited access to our photos"}
      text2= {"You can download 10 photos a week"}
      text3 = {"You must mention us on your site"}
      text4 = {"You have unlimited access to our photos"}
      text5 = {"You can download as many pictures as you want"}
      text6 = {"You don't have to mention us on your site"}
      />
      
     </div>
   </InnerLayout>
  </PaymentStyle>
 )
}

export default PaymentSection
