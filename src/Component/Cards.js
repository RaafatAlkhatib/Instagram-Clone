import { Card , Icon , Tabs} from 'antd';
import React, { Component } from 'react';



const gridStyle = {
  width: '30%',
  textAlign: 'center',
};

const tabListNoTitle = [{
  key: 'POSTS',
  tab: 'POSTS',
 
}, {
  key: 'IGTV',
  tab: 'IGTV',
}, {
  key: 'SAVED',
  tab: 'SAVED',
},{
  key: 'TAGEED',
  tab: 'TAGEED',
}
];

const contentListNoTitle = {
  POSTS: <p>
    <Card>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    
  </Card>,
    
    
     </p>,
  IGTV: <p>IGTV </p>,
  SAVED: <p><Card>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  <Card.Grid style={gridStyle}>Content</Card.Grid>
  
</Card>,</p>,

  TAGEED: <p>TAGEED</p>
};

class Cards extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }

  render() {
    return (
      <div>
       
        <Card
        
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}

export default Cards;