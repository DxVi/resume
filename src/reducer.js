export const initialState = {
  resumeData: {},
};

export const actionTypes = {
  SET_RESUMEDATA: "SET_RESUMEDATA",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_RESUMEDATA:
      return {
        ...state,
        resumeData: action.resumeData,
      };

    default:
      return state;
  }
};

export default reducer;
