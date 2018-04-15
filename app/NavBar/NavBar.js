import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Home from '../Pages/Home';
import Home1 from '../Pages/Home';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "open": false,
      "show": null
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.Page1 = this.Page1.bind(this);
    this.Page2 = this.Page2.bind(this);
    this.Page3 = this.Page3.bind(this);
    this.Home1 = this.Home1.bind(this);
  }

  handleToggle () {
    this.setState({ open: !this.state.open });
      };

  Home1 (){
    this.setState({ show: 'Home1', open: false});
  }

  Page1 () {
    this.setState({ show: 'Page1', open: false });
  };

  Page2 () {
    this.setState({ show: 'Page2', open: false });
  };
  Page3 (){
    this.setState({ show: 'Page3', open: false});
  };

  render() {

    let content = null;
    let title = null;

    switch (this.state.show) {
      case 'Home1':
        content = (<Home1/>);
        title = "Sea Turtle";
        break;

      case 'Page1':
        content = (<Page1 />);
        title = "Why Are They Endangered";
        break;

      case 'Page2':
        content = (<Page2 />);
        title = "Sea Trutle Now";
        break;

      case 'Page3':
        content = (<Page3 />);
        title = "How You Can Help";
        break;

      default:
        content = (<Home/>);
        title = "Sea Turtle";
    }

    return (
      <div className="App">
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          title="The Endangered Sea Turtle"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>

          <AppBar title="AppBar" />

          <MenuItem  onClick={this.Home1}>Home</MenuItem>
          <MenuItem  onClick={this.Page1}>Why Are They Endangered</MenuItem>
          <MenuItem  onClick={this.Page2}>Sea Turtle Now</MenuItem>
          <MenuItem  onClick={this.Page3}>How You Can Help</MenuItem>
        </Drawer>
        <Paper zDepth={5}>
           <Toolbar>
               <ToolbarTitle text ={ title }/>
           </Toolbar>
           {content}
        </Paper>
      </div>
    );
  }
}

export default NavBar;
