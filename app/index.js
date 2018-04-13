import React, { Component} from 'react';
import { render } from 'react-dom';
import NavBar from './NavBar/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <NavBar/>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
