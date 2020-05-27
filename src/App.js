import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {incrementValue, decrementValue} from './Redux/action.js';

function App() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

  return (
      <>
      <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(decrementValue())}>
              -
          </button>
          <button onClick={() => dispatch(incrementValue())}>
              +
          </button>
      </div>
      </>
  )
}


export default App;
