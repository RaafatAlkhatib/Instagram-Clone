import React, { Component } from 'react';
import { Form, Icon, Input, Button, Carousel, Layout,Divider,Card } from 'antd';
import { RightDiv,LeftDiv , Button2 , Footerlist ,Animation} from './LandingPageStyle';
/* import {Link} from '';  */





const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;

class LandingPage extends React.Component  {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {

        return (
            <div>
    <Layout >
      <Content>
            <RightDiv>
              
              <img src={ require('../Images/instagram.png')} />
              <p1>Sign up to see photos and videos {<br/>}from your friends.</p1>
              
                <Button type="primary" block>
                
              
                <Icon type="facebook" theme="filled" />Log in with Facebook </Button>
             <Divider>OR</Divider>
            
             <FormItem>
             <Input prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Mobile Number or Email" />
            
                
                 <Input prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Full Name" />
                 
              <Input prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              

                 <Input prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            

                    </FormItem>

                    <Button2><Button type="primary" block>Sign Up</Button></Button2>
                    <p2>By signing up, you agree to our </p2>
                    <p3><a href="#">Terms, Data Policy and Cookies Policy.</a></p3>

      
                   <lowerdiv>
                       <div>  <p>Have an account?
                          {/*  <Link to='./'>Log In </Link> */}
                           
                           </p> </div>
                     
                       </lowerdiv>
                   
               
                   <p5>Get the app.</p5>

                   <download>
                   <img src={ require('../Images/app.png')} />
                    <img src={ require('../Images/Googleplay.png')} />          
                   </download>
                    
                        </RightDiv>
            
            
            <LeftDiv>

           <Animation>
           <Carousel autoplay effect="fade">
            <div><img src={ require('../Images/11.jpg')} /></div>
            <div><img src={ require('../Images/22.jpg')} /></div>
            <div><img src={ require('../Images/33.jpg')} /></div>
            <div><img src={ require('../Images/44.jpg')} /></div>
            <div><img src={ require('../Images/55.jpg')} /></div>

        </Carousel>

           </Animation>
            </LeftDiv>
            
    
      </Content>




    
    <Footer>
       <Footerlist>
           
       <ul>
          <li><a href="#">ABOUT US</a></li>
          <li><a href ="#">SUPPORT</a></li>
          <li><a href="#">PRESS</a></li>
          <li><a href="#">API </a></li>
		      <li><a href="#">JOBS</a></li>
          <li><a href="#">PRIVACY</a></li>
          <li><a href="#">TERMS</a></li>
          <li><a href ="#">DIRECTORY</a></li>
          <li><a href="#">PROFILES</a></li>
          <li><a href="#">HASHTAGS</a></li>
		      <li><a href="#">LANGUAGE</a></li>
          
       </ul>
       
       
       <p>© 2018 INSTAGRAM</p>


       </Footerlist>
      
       
     </Footer>
    </Layout>

</div>

        );
    }
}







export default LandingPage;