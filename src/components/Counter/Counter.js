import React from 'react';
import './Counter.scss'
import {connect} from 'react-redux'
import {increase, decrease} from '../../actions/index'

const Counter = ({onIncrease, onDecrease, result}) => {
  return(
    <div className='Counter'>
      <span onClick={onIncrease}>+</span>
      <span onClick={onDecrease}>-</span>
      <span>{result}</span>
    </div>
  )
};

const mapStateToProps = ({result}) => {
  return {result}
};

const mapDispatchToProps = {
  onIncrease: increase,
  onDecrease: decrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)