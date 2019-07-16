import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({realtime: true, port: 8000});

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;