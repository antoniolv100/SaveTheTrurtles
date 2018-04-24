import React, { Component} from 'react';
import { render } from 'react-dom';
import NavBar from './NavBar/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './Footer/Footer';


class App extends Component {

  constructor(props) {
  super(props);

  this.state = {
    pos: 1,
  }
  this.onUpdate=this.onUpdate.bind(this);
}

onUpdate (val) {
  this.setState({
    pos: val
  })
};

  render(){
    return(
      <MuiThemeProvider>
        <NavBar onUpdate={this.onUpdate}/>
        {this.state.pos}
        <Footer passpos={this.state.pos}/>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
