import {LOG_IN_BUTTON_STATUS} from "../constants/StatusConstants";
import {StatusActionTypes} from "../types/StatusActionTypes";

export const setLogInButtonStatus = (value: boolean): StatusActionTypes => {
  return {
    type: LOG_IN_BUTTON_STATUS,
    payload: value
  }
}
