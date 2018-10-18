import styled, { css } from 'styled-components'



export const Divone = styled.div`
width:100vw;
height: 78px;
border-bottom: 1px solid #E6E6E6;
background-color:white;
margin:0px;
padding:0px;
display:inline-block;



divleft{
    img{width:32px;height:32px; position:relative; left: 210px;top: 18px;}}
leftlogo{
    img{position: relative;
    left: 235px;
    top: 18px;
    height: 50px;
    border-left: 1px solid black;
    padding-left: 25px;
    }}

centerdiv{position:relative;left:570px;bottom:25px;}
Input{width: 220px;}
.ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:85px}
.ant-input-prefix{padding:4px 0px 0px 55px;color: #A8AAAD;}
rightdiv{float:right;font-size:24px;margin-right:150px;position:relative;bottom:60px;}
.anticon{padding-right:50px}
   
`;

export const Upperinfo = styled.div`
width:100%;
display:inline-flex;
padding-top:60px;
img{border-radius:50%; margin:0px 100px 60px 270px; height:165px ;width:165px;border: 1px solid #D0D9C7}
profilename{font-size:32px; font-weight:200px;line-height:40px;padding-right:20px}
Button{border: 1px solid #dbdbdb;color: #262626;font-weight:500;margin-top:6px;margin-right:15px;padding:0px 10px}
.anticon{font-size:32px;margin-top:6px};
info{font-size:16px; position:relative;top:55px;right:357px;font-weight: 600;color:#262626;
    span{ font-weight:normal}
    posts{padding-right:40px}
    followers{padding-right:40px}
    following{padding-right:40px}}
    username{width:120px;font-weight:600;color:#262626;position:relative;top:100px;right:44em;font-size:16px}
    .ant-divider-horizontal{margin: 0px 207px;color:#EFEFEF;position:relative;top:-4em}
`;


export const Timeline = styled.div`
margin:0px 207px;
position: relative;
bottom: 60px;
.ant-tabs-large > .ant-tabs-bar .ant-tabs-nav-container{font-size:13px;font-weight:600;}
.ant-tabs{}
.ant-card{border:none;display:inline-flex;margin:5px }
.ant-card-head{border:none;font-weight:600;padding-left:25%}
img{width:295px;height:295px;}
.ant-tabs-nav{margin-left:270px}
`;


export const Footerlist =styled.div`
P{float:right;position: relative;bottom:35px;right:150px;font-size:12px;}
ul{padding-left:150px;}
ul li{display:inline-block;font-size:12px;};
ul li a{padding:8px;color:#0f3066;};
.ant-layout{background:white;}
`