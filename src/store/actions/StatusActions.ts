import {LOG_IN_BUTTON_STATUS, SET_ROLE} from "../constants/StatusConstants";
import {LogInStatusTypes, SetRoleType} from "../types/StatusActionTypes";

export const setLogInButtonStatus = (value: boolean): LogInStatusTypes => {
  return {
    type: LOG_IN_BUTTON_STATUS,
    payload: value
  }
}

export const setUserRole = (role: string | null): SetRoleType => {
  return {
    type: SET_ROLE,
    payload: role
  }
}
