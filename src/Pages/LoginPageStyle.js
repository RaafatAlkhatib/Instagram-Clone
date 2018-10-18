import styled, { css, consolidateStreamedStyles } from 'styled-components'



export const Content=styled.div`
height:100vh;
`;

export const Center =styled.div`
background-color:white;
width:350px;
height:400px;
margin:auto;
padding:20px;
text-align:center;
position:relative;
bottom:40px;
border: 1px solid #E6E6E6;
margin-top:50px;
margin-bottom:50px;
Button{margin-top:20px; font-weight:bold}
p{font-size:14px;font-weight:bold;color:#385185 }
forgetpassword{color: #385185; font-size:12px}
download{display: inline-flex;padding-top: 50px;position: relative;right: 5px;}
download img{margin-left:5px;width:135px;height: 40px;}
p5{position:relative;top:30px}
`;

export const Lowercenterdiv=styled.div`
margin-top:20px;
height:60px ;
width:350px;
background-color:white;
text-align:center;
margin:auto;
padding:20px;
margin-left:50px;
position:relative;
right:71px;
border: 1px solid #E6E6E6;

`;
 



export const Footerlist =styled.div`

ul{padding-left:150px;margin-top:150px;}
ul li{display:inline-block;font-size:12px;};
ul li a{padding:8px;color:#0f3066;};
P{float:right;position: relative;bottom:35px;right:150px;font-size:12px;}
`