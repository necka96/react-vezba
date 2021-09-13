import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
:root {
  --primarna: hsl(243, 69%, 59%);
  --pink: hsl(345, 88%, 63%);
  --neutralna-svetla: hsl(222, 100%, 97%);
  --sekundarna: hsl(237, 21%, 57%);
  --crna-primarna: hsl(237, 56%, 20%);
  --border-color: hsl(260, 68%, 83%);
  --gradient: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,190,29,0.9809057412027311) 50%, rgba(252,176,69,1) 100%);


}

*{
 padding: 0;
 margin: 0;
 list-style: none;
 box-sizing: border-box;
 font-family: 'Nunito', sans-serif;
 text-decoration: none;
}

body{
 background-color: var(--neutralna-svetla);
}
p{
  color: var(--pink);
  line-height: 1.9rem;
}
.secondary-heading{
  font-size: 2rem;
  color: var(--primarna)
}
.small-heading{
   font-size: 1.5rem;
  color: var(--primarna);
  text-align: center;

  span{
  color: var(--pink);
 }
}
.c-p{
  text-align: center;
}
@media only screen and (max-width: 800px){
  p{
    line-height: 1.4rem;
  }
}


`

export default GlobalStyle