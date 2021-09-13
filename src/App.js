import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import CardSection from "./Components/CardSection";
import ChartSection from "./Components/ChartSection";
import FAQSection from './Components/FAQSection';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MessaginSection from "./Components/MessaginSection";
import PaymentSection from "./Components/PaymentSection";
import { OuterLayout } from './Layouts';
const MainStyled = styled.section``

function App() {
  return (
    <>
   
     <Header/>
   <OuterLayout>
    <MainStyled>
    <Fade left>
  
        <CardSection/> 
    </Fade>
    <Fade right>
        <ChartSection/>
    </Fade>
    <Fade left>
        <MessaginSection/>
   </Fade>
   <Fade right>
        <PaymentSection/>
    </Fade>
   <Fade left>
        <FAQSection/>
    </Fade>
    </MainStyled>
   </OuterLayout>
   <Fade bottom>
        <Footer/>
        </Fade>
    </>
  );
}

export default App;
