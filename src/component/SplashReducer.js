import { SplashActionTypes } from './SplashActions';

const initialState = {
  data: { test: '' },
};

const splashReducer = (state = initialState, action) => {
  switch (action.type) {
    case SplashActionTypes.LOAD:
      return {
        ...state,
        data: {
          ...state.data,
          test: 'Hello World',
        },
      };
    default:
      return state;
  }
};

export default splashReducer;
