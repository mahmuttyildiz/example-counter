import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {incrementValue, decrementValue} from './Redux/action.js';

class App extends React.Component{

  render(){
      const {count, incrementValue, decrementValue} = this.props;
      return <div>
          <h1>{count}</h1>
          <button onClick={decrementValue}>
              -
          </button>
          <button onClick={incrementValue}>
              +
          </button>
      </div>
      
    }
}
const mapStateToProps = (state) => {return state};
const mapDispatchToProps = {
      incrementValue,
      decrementValue,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
