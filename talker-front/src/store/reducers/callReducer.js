import * as callActions from "../actions/callActions";

const initState = {
  localSream: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};
export default reducer;
