import React from 'react';
import './Counter.scss'
import {connect} from 'react-redux'
import {increase, decrease, rand, increaseNumber} from '../../actions/index'

const Counter = ({onIncrease, onDecrease, increaseNumber, result, message, random}) => {
  return(
    <div className='Counter'>
      <span onClick={onIncrease}>+</span>
      <span onClick={onDecrease}>-</span>
      <span onClick={random}>R</span>
      <span>{result}</span>
      {message ? <p>You can't decrease</p> : null}


      <div className="async" onClick={() => increaseNumber(100)}>async add 100</div>
    </div>
  )
};

const mapStateToProps = (state, {result, message} = state.count1) => {
  return {result, message}
};

const mapDispatchToProps = {
  onIncrease: increase,
  onDecrease: decrease,
  random: rand,
  increaseNumber: increaseNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)