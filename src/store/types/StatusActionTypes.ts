import {LOG_IN_BUTTON_STATUS, SET_ROLE} from "../constants/StatusConstants";

export interface LogInStatusTypes {
  type: typeof LOG_IN_BUTTON_STATUS,
  payload: boolean
}

export interface SetRoleType {
  type: typeof SET_ROLE
  payload: string | null
}

export type StatusActionTypes = LogInStatusTypes | SetRoleType;

