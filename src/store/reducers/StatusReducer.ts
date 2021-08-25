import {StatusActionTypes} from "../types/StatusActionTypes";
import {LOG_IN_BUTTON_STATUS, SET_ROLE} from "../constants/StatusConstants";

const initialState: storeTypes = {
  isLogIn: false,
  role: null
}

interface storeTypes {
  isLogIn: boolean
  role: string | null
}

export const StatusReducer = (state: storeTypes = initialState, action: StatusActionTypes) => {
  switch (action.type) {
    case LOG_IN_BUTTON_STATUS: {
      return {
        ...state,
        isLogIn: action.payload
      }
    }
    case SET_ROLE: {
      return {
        ...state,
        role: action.payload
      }
    }
    default:
      return state
  }
}
