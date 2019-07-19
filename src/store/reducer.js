import * as actions from "./actions";
const defaultState = {
  version: "English Standard Version (ESV)",
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
