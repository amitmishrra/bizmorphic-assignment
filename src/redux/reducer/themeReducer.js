import {SET_THEME } from '../action/theme';

const initialState = {
  mode: 'Light',
};

 const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default themeReducer;