import * as actions from "./actions";
const defaultState = {
  version: "NIV",
  book: "Genesis",
  chapter: "1"
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SETVALUE:
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
};
export default reducer;
