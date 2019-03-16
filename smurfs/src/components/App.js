import React, { Component } from 'react';
import './App.css';

// import UpdateSmurfForm from '../components/UpdateSmurfForm';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { getSmurfs, 
    addSmurf 
} from '../actions';
import { connect } from 'react-redux';



/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {
    componentDidMount() {
      this.props.getSmurfs();
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-Title">{`Smurfs Village`}</h1>
            <SmurfForm />
          </header>
          
          {this.props.error ? <h3>Error Fetching Smurfs</h3> : null}
          
           <div className="Flex-Container">
          {this.props.gettingSmurfs}
              {/* <Smurfs smurfs={this.props.smurfs} /> */}

          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    const { smurfsReducer } = state;
    return {
        smurfs: smurfsReducer.smurfs,
      error: smurfsReducer.error,
      gettingSmurfs: smurfsReducer.gettingSmurfs
    };
  };
  
  export default connect(mapStateToProps, { getSmurfs })(App);