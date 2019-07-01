import {combineReducers} from 'redux';
import test from './api.reducer';
import Router from '../../navigation/Drawer';

const router = Router.router;
const homeNavAction = router.getActionForPathAndParams('home');
const initialNavState = router.getStateForAction(homeNavAction);

const nav = (state = initialNavState, action) => {
  const nextState = router.getStateForAction(action, state);
  return nextState || state;
};

export default combineReducers({
  test,
  nav
});