import {LOG_IN_BUTTON_STATUS} from "../constants/StatusConstants";

export interface StatusActionTypes {
  type: typeof LOG_IN_BUTTON_STATUS,
  payload: boolean
}
