import React from 'react'
import Pulse from 'react-reveal/Pulse'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts'
import questions from '../questions'
import Question from './Question'
const FaqStyle = styled.section`

.c-p{
 padding-top: 20px;
 width: 60%;
 margin: 0 auto;
}


`


function FAQSection() {
 return (
  <FaqStyle>
   <InnerLayout>
   
   <Pulse>
        <h3 className="small-heading">Frequently <span>asked questions</span> </h3>
   </Pulse>
    <p className="c-p">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus itaque provident cum, quas ipsa veniam ad veritatis distinctio, quaerat, eum ab. Perspiciatis doloremque quasi doloribus quam deserunt? 
    </p>
     <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
    
    </InnerLayout>
  </FaqStyle>
 )
}

export default FAQSection
