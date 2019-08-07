import {DECREASE2, INCREASE2} from "../actions/actionTypes";

const initialState2 = {
  result2: 0,
};

const count2 = (state = initialState2, action) => {
  switch (action.type) {
    case INCREASE2:
      return{
        result2: state.result2 + 2
      };
    case DECREASE2:
      return{
        ...state,
        result2: state.result2 - 2
      };

    default:
      return state
  }
};

export default count2;