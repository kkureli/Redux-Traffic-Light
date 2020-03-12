/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import * as actionTypes from "./actions";

const initialState = {
  currentLight: "red"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RED_LIGHT:
      return {
        currentLight: "red"
      };

    case actionTypes.YELLOW_LIGHT:
      return {
        currentLight: "yellow"
      };
    case actionTypes.GREEN_LIGHT:
      return {
        currentLight: "green"
      };
  }
  return state;
};

export default reducer;
