import React from 'react'
import Pulse from 'react-reveal/Pulse'
import styled from 'styled-components'
import avatar1 from "../images/avatar1.jpg"
import avatar2 from "../images/avatar2.jpg"
import avatar3 from "../images/avatar3.jpg"
import avatar4 from "../images/avatar4.jpg"
import avatar5 from "../images/avatar5.jpg"
import chat from "../images/chat.png"
import { InnerLayout } from '../Layouts'

const MessaginStyle = styled.section`
.messagin-container{
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

 .left-content{
  p{
   margin: 20px 0;
  }

  padding: 2rem 0;
  .img-container{
   margin-top: 10px;
   display: flex;
   align-items: center;
   img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    object-position: center;
   }
   .image-2,.image-3,.image-4,.image-5{
    margin-left: -10px;
   }
  }
 }
 .right-content {

 display: flex;
 justify-content: center;

  
  img{
   width: 60vw;
   max-width: 250px;
   
  }
 }
}
`


function MessaginSection() {
 return (
  <MessaginStyle>
 <InnerLayout>
    <div className="messagin-container">
   <div className="left-content">
   <Pulse>
   <h2 className="secondary-heading">
   We speak 5 different languages
   </h2>
   </Pulse>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, minima harum cumque explicabo officia praesentium veritatis quas in maxime cupiditate nam optio iste!</p>
   <div className="img-container">
   <img src={avatar1} alt="" className="image-1" />
   <img src={avatar2} alt="" className="image-2" />
   <img src={avatar3} alt="" className="image-3" />
   <img src={avatar4} alt="" className="image-4" />
   <img src={avatar5} alt="" className="image-5" />
   <p>&nbsp; +25</p>
   </div>
   </div> 
   <div className="right-content">
   <img src={chat} alt="" />
   </div>
    </div>
 </InnerLayout>
  </MessaginStyle>
 )
}

export default MessaginSection
