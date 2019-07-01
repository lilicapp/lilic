import {TEST_ACTION} from '../actions/index.actions';

const defaultState = {
  test: '',
};

const test = (state = defaultState, action) => {
  switch (action.type) {
  case TEST_ACTION: {
    return {...state, text: action.payload};
  }
  default:
    return state;
  }
};

export default test;