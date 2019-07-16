const initialState = {
  categories: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
  // GET Popular categories
  case 'GET_POPULAR_CATEGORIES':
    return {...state, lastAction: action.payload};
  case 'GET_POPULAR_CATEGORIES_SUCCESS':
    return {...state, categories: action.payload};
  case 'GET_POPULAR_CATEGORIES_FAILED':
    return {...state, error: action.payload};
  default:
    return state;
  }
};

export {dataReducer};