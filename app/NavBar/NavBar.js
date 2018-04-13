import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Home from '../Pages/Home';

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
  }

  handleToggle () {
        this.setState({ open: !this.state.open });
      };

  Page1 () {
    this.setState({ show: 'Page1', open: false });
  };

  Page2 () {
    this.setState({ show: 'Page2', open: false });
  };

  render() {

    let content = null;

    switch (this.state.show) {
      case 'Page1':
        content = (<Page1 />);
        break;

      case 'Page2':
        content = (<Page2 />);
        break;

      default:
        content = (<Home/>);
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
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}>

          <AppBar title="AppBar" />
          <MenuItem  onClick={this.Page1}>Page1</MenuItem>
          <MenuItem  onClick={this.Page2}>Page2</MenuItem>
        </Drawer>
        {content}
      </div>
    );
  }
}

export default NavBar;
