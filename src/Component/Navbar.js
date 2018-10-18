import React, { Component } from 'react';
import { Layout, Row, Col, Input ,Icon} from 'antd';
import { Divone } from '../Pages/ProfilePageStyle';




const { Header, Content, Footer } = Layout;
const Search = Input.Search;

class Navbar extends React.Component  {
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
    <Row>
      <Col span={24}>
      <Divone>
          <divleft>
               <img src={ require('../Images/icon.png')} /> 
              </divleft>
          
          <leftlogo>
          <img src={ require('../Images/instagramCopy.png')} /> 
         
          </leftlogo>
          
          <centerdiv>
          <Input placeholder="Search" prefix={<Icon type="search" theme="outlined" />} />
          </centerdiv>
         

         <rightdiv>
         <Icon type="compass" theme="outlined" />
         
         <Icon type="heart" theme="outlined" />
         <Icon type="user" theme="outlined" />
         </rightdiv>
      </Divone>

        

      </Col>
      
    </Row>
    
  </div>


        );
    }

}







export default Navbar;