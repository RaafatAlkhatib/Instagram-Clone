import styled, { css } from 'styled-components'
import background from '../Images/background.png';




export const RightDiv = styled.div`
float:right;
border:1px solid #E6E6E6;
padding:16px 35px 0px 35px;
margin: 45px 300px 255px 0px;
width:350px ;
height:600px ;
background-color:white;


 img{display:block; margin-left:50px;margin-bottom:0px}
 p1{display:block; font-size:16px;font-weight:bold;text-align:center;color:#999999}
 Button{margin-top:30px;font-size:15px;font-weight:inherit} 
 Button2{margin-top:0px}
.ant-input:not(:first-child){
padding-left:5px}
.ant-input{font-size:12px}
p2{display:block;font-size:15px;text-align:center;color: #999999}
p3 a{display:block;font-size:14px;text-align:center;color: #999999;font-weight:bold ;padding-bottom:55px}
lowerdiv div {background-color:white;
    width:350px;
    border:1px solid #E6E6E6;
    position:relative;
    right:35px;
    height:80px;
    padding:30px 10px 30px 10px;
    text-align:center}
p5{padding: 100px;position: relative;top: 30px;}
download{display: inline-flex;padding-top: 50px;position: relative;right: 5px;}
download img{margin-left:0px}


`;

export const Button2 =styled.div`
margin-top:5px;
position:relative;
bottom:45px ;


`;

export const Footerlist =styled.div`
P{float:right;position: relative;bottom:35px;right:150px;font-size:12px;}
ul{padding-left:150px;}
ul li{display:inline-block;font-size:12px;};
ul li a{padding:8px;color:#0f3066;};

`


export const LeftDiv=styled.div`
background-Image: url(${background});background-repeat:no-repeat;
width:50%;
height:100vh ;
float:left;
margin:117px 0px 0px ;
position:relative;left:250px;

`;


export const Animation=styled.div`
float:left;
position:relative;left:149px;
top:98px;
width: 244px;
img{height:430px;width:242px; }


`;