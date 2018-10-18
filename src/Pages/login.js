import React, { Component } from 'react';
import { Form, Icon, Input, Button, Carousel, Layout,Divider,Card } from 'antd';
import {Center , Footerlist,Lowercenterdiv } from './LoginPageStyle';




const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;

class Login extends React.Component  {
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
               <Layout>
             
                
                    <Center>
                    <img src={ require('../Images/instagram.png')} />
                    <FormItem>
                    <Input prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone number,userName or Email" />
                    <Input prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                    
                    <Button type="primary" block>Log In</Button>
              
                    <Divider>OR</Divider>

                    <p>
                    <Icon type="facebook" theme="filled" /> Log In with facebook
                    </p>

                    <forgetpassword>
                    ForgetPassword?
                    </forgetpassword>

                 
            

                    </FormItem>

                   <div>
                   <Lowercenterdiv>
                    Don't have an account? <a href="#">Sign up</a>
                    </Lowercenterdiv>
                   </div>
                 
                   <p5>Get the app.</p5>

                        <download>
                        <img src={ require('../Images/app.png')} />
                        <img src={ require('../Images/Googleplay.png')} />          
                        </download>
                    </Center>

                     

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







export default Login;