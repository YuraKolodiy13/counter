import {createStore, applyMiddleware, compose} from 'redux';
import reducer from "./reducers/index";
import reduxThunk from 'redux-thunk';

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action);
//       console.log('middleware', store.getState());
//       return result;
//     }
//   }
// }

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log('middleware', store.getState());
  return result;
};



const store = createStore(reducer, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
)));

export default store;