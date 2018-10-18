import React, { Component } from 'react';
import Navbar from '../Component/Navbar';
import { Button, Icon , Divider, Layout  } from 'antd';
import { Upperinfo,Timeline,Footerlist } from '../Pages/ProfilePageStyle';
import Tabsline from '../Component/Tabscard';


  
class Profile extends React.Component  {
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
    <Navbar/>

    <Upperinfo>
     <img src={ require('../Images/profile.jpg')} />
     <profilename>raafat.alkhatib</profilename>
     
     <Button>Edit Profile</Button>
     <Icon type="setting" theme="outlined" />

     <info>
     <posts>
         73 <span> posts</span>
     </posts>
     <followers>
         200 <span> followers</span>
     </followers>
     <following>
         1000 <span> following</span>
     </following>
     </info>
<username>
Ra'fat Alkhatib
</username>
     
       </Upperinfo>

   <Upperinfo>
   <Divider />
   </Upperinfo>
    
    
   
  



       <Timeline>


                <Tabsline/>


       </Timeline>
       
       

       
       <Layout style={{ backgroundColor: 'white' }}>

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
      
       
     
</Layout>

</div>

        );
    }
}







export default Profile;