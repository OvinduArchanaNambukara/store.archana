import {StatusActionTypes} from "../types/StatusActionTypes";
import {LOG_IN_BUTTON_STATUS} from "../constants/StatusConstants";

const initialState: storeTypes = {
  isLogIn: false
}

interface storeTypes {
  isLogIn: boolean
}

export const StatusReducer = (state: storeTypes = initialState, action: StatusActionTypes) => {
  switch (action.type) {
    case LOG_IN_BUTTON_STATUS: {
      return {
        ...state,
        isLogIn: action.payload
      }
    }
    default:
      return state
  }
}
