import { TOOGLE_NAV } from "reduxState/actionTypes";

const InitialState = {
  isNavOpen: false,
};

export const NavReducer = (state = InitialState, action) => {
  switch (action.type) {
    case TOOGLE_NAV:
      return { ...state, isNavOpen: !state.isNavOpen };
    default:
      return state;
  }
};
