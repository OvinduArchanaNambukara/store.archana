import {SHOW_CROP_IMAGE} from "../constants/AdminConstats";

export interface ShowImageCrop {
  type: typeof SHOW_CROP_IMAGE,
  payload: string | null
}
