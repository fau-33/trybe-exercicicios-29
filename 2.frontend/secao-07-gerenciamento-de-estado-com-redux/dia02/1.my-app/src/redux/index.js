import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './reducers/counterReducer';


export const actionCreator = (increment = 1) => ({ 
  type: 'INCREMENT_COUNTER',
  payload: increment,
});

const store = createStore(counterReducer, composeWithDevTools());

export default store;
