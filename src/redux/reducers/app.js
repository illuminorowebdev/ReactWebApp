import actionTypes from 'redux/constants';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_APP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
