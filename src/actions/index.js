import {INCREASE, DECREASE, RANDOM, INCREASE2, DECREASE2} from './actionTypes'

export const increase = () => {
  return{
    type: INCREASE
  }
};
export const decrease = () => {
  return{
    type: DECREASE
  }
};
export const rand = () => {
  return{
    type: RANDOM
  }
};

export const increase2 = () => {
  return{
    type: INCREASE2
  }
};
export const decrease2 = () => {
  return{
    type: DECREASE2
  }
};
export const increaseNumber = (number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increase(12))
    }, 3000)
  }
};