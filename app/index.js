import React, { Component} from 'react';
import { render } from 'react-dom';
import NavBar from './NavBar/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const footerStyle = {
  backgroundColor: "purple",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <NavBar/>
    <Footer>
      <span>footer content</span>
    </Footer>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
