import React from 'react';
import { Bounce, Roll } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import AnimatedBtn from './AnimatedBtn';
import Chart from './Chart';
import Stats from './Stats';
const ChartStyle = styled.section`
.chart-container{
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 20px;
.left-content{
 .stats{
  .stats-money{
   display: flex;
   justify-content: space-evenly;
   margin-bottom: 20px;
   flex-wrap: wrap;
   gap: 10px;
  }
  
 }
}
}
.right-content{
  p{
    padding: 1.3rem 0;
  }
}


`
function ChartSection() {
 return (
  <ChartStyle id="about">
<InnerLayout>
    <div className="chart-container">
     <div className="left-content">
      <div className="stats">
      <div className="stats-money">
  <Pulse>
         <Stats name={"Flowers"} amount={"$5.03"}/>
         <Stats name={"Decoration"} amount={"$100.62"}/>
         <Stats name={"Photography"} amount={"$2.52"}/>
  </Pulse>
      </div>
      <Chart/>
      </div>
     </div>
     <div className="right-content">
     <Pulse>
     <h2 className="secondary-heading">Order statistics </h2>
     </Pulse>
    <Roll right>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vel doloribus hic inventore illo temporibus asperiores suscipit voluptatum ducimus velit consectetur id in, officia reprehenderit!</p>
    </Roll>
     <Bounce right>
       <AnimatedBtn name={"Order now"}/>
     </Bounce>
     </div>
    </div>
</InnerLayout>
  </ChartStyle>
 )
}

export default ChartSection
