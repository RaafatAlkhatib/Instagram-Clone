import React, { Component } from 'react';
import { Tabs, Icon ,Card } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';



const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
  }

 

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

const gridStyle = {
    width: '295px',
    textAlign: 'center',
  };


class Tabsline extends React.Component  {
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
 <tabs>


  <StickyContainer>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      <TabPane tab={<span><Icon type="table" theme="outlined" />POSTS</span>} key="1" >
      <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/1.jpg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/2.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/3.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/4.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/5.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/6.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/7.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/8.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/9.jpeg')} />}
  >
    
  </Card>,
  
  
  </TabPane>
      <TabPane tab={<span><Icon type="save" theme="outlined" />SAVED</span>} key="2" >
      <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/1.jpg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/2.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/3.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/4.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/5.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/6.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/7.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/8.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/9.jpeg')} />}
  >
    
  </Card>,
  </TabPane>
      <TabPane tab={<span><Icon type="tag" theme="outlined" />TAGEED</span>} key="3" >
      <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/1.jpg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/2.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/3.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/4.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/5.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/6.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/7.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/8.jpeg')} />}
  >
    
  </Card>,
  <Card
    hoverable
    style={{ width: 295 ,height: 295 }}
    cover={<img src={ require('../Images/Posts/9.jpeg')} />}
  >
    
  </Card>,
      </TabPane>
     

    </Tabs>
  </StickyContainer>,
</tabs>





        );
    }
}







export default Tabsline;