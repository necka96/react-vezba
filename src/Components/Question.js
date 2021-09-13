import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
const QuestionStyle = styled.div`
margin: 1rem 0;
padding: 1.4rem 1rem;
background: #fff;
border-radius: 20px;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
p{
 margin-top: 10px;

}
.title {
 display: flex;
 align-items: center;
 justify-content: space-between;
 
 h4{
  color: #16444f;
  font-size: 1.3rem;
 }
 button{
  padding-left: 20px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  
 }
}
`

function Question({title, description}) {
const [showQuestion, setShowQuestion] = useState(false)

 return (
   <Fade button cascade>
  <QuestionStyle>
   <div className="q-con">
 <div className= "title">
    <h4>{title}</h4>
 
  <button onClick={()=> setShowQuestion (!showQuestion) }>
  {showQuestion ?  <img src={minus} alt="" /> : <img src={plus} alt="" />}
  </button>
  </div>
  {showQuestion && <p>{description}</p>}
   </div>
  </QuestionStyle>
  </Fade>
 )
}

export default Question
