import { combineReducers } from 'redux';

const initialBackground = 'lithop_logo.png';

const BackgroundReducer = (state = initialBackground, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND':

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  Background: BackgroundReducer
})

export default rootReducer
