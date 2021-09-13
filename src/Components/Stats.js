import React from 'react'
import styled from 'styled-components'
const StatsStyle = styled.div`
background: white;
border-radius: 15px;
border: 1px solid var(--border-color);
padding: 1rem 2rem;
text-align: center;
p{
 color: #333;
 font-weight: bold;
}
h4{
 font-size: 2rem;
 color: var(--primarna);
}


`
function Stats({name, amount}) {
 return (
  <StatsStyle>
   <div className="stats-comp">
    <p>{name}</p>
    <h4>{amount}</h4>
   </div>
  </StatsStyle>
 )
}

export default Stats
