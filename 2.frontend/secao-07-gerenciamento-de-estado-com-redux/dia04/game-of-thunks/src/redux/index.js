import { createStory, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import characterReducer from './reducers/characterReducer';


const store =createStory(characterReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;