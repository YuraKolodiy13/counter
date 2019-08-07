import {DECREASE, INCREASE, RANDOM, INCREASE_NUMBER} from "../actions/actionTypes";

const initialState = {
  result: 0,
  message: false
};

const count1 = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return{
        message: false,
        result: state.result + 1
      };
    case DECREASE:
      if(state.result === 0){
        return{
          result: 0,
          message: true
        }
      }
      return{
        ...state,
        result: state.result - 1
      };

    case RANDOM:
      return{
        message: false,
        result: state.result + Math.floor(Math.random() * 10)
      };
    case INCREASE_NUMBER:
      return{
        message: false,
        result: state.result + action.payload
      };

    default:
      return state
  }
};

export default count1;