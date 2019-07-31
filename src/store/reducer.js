import * as actions from "./actions";
const defaultState = {
  versions: [],
  version: "Loading...",
  sourceId: "",
  books: [],
  book: "Loading...",
  bookCode: "",
  chapter: "1",
  fontSize: 16,
  fontFamily: "Sans"
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
