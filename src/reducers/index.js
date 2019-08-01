const initialState = {
  result: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return{
        result: state.result + 1
      };
    case 'DECREASE':
      return{
        result: state.result - 1
      };

    default:
      return state
  }
};

export default reducer;