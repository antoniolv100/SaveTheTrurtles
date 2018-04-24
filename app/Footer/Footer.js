import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

class Footer extends Component {
  constructor (){
    super();
    this.state = {
      color : 'aqua',
    }
  }

  render(){
    let pos = this.props.passpos;
    let first = null ;
    let sec = null;
    let third = null;
    let four =  null;

    switch (pos) {
      case 1:
      first = this.state;
        break;
      case 2:
      sec = this.state;
        break;
      case 3:
      third = this.state;
        break;
      case 4:
      four = this.state;
        break;
      default:
       first = null;
       sec = null;
       third = null;
       four =  null;
    }

    const styles = {
    container: {
        display: 'flex',
        justifyContent:'space-evenly',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        backgroundColor: '#0099ff',
      }
    };

    return(
    <Paper>
    <div className="container" style={styles.container}>
      <div className="box1" style={first}>
        Sea Turtle
      </div>
      <div className="box1" style={sec} >
       Why Are They Endangered
      </div>
      <div className="box1" style={third}>
       Sea Trutle Now
      </div>
      <div className="box1" style={four}>
      How You Can Help
      </div>
    </div>
    </Paper>
    );
  }
}
export default Footer;
