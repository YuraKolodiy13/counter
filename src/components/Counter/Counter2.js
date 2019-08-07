import React from 'react';
import './Counter.scss'
import {connect} from 'react-redux'
import {decrease2, increase2} from "../../actions";

class Counter2 extends React.Component{
  render(){
    return(
      <div className='Counter'>
        <span onClick={this.props.onIncrease2}>+</span>
        <span onClick={this.props.onDecrease2}>-</span>
        <span>{this.props.result2}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result2: state.count2.result2
  }
};

const mapDispatchToProps = {
  onIncrease2: increase2,
  onDecrease2: decrease2
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter2)