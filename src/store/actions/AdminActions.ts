import {ShowImageCrop} from "../types/AdminActionTypes";
import {SHOW_CROP_IMAGE} from "../constants/AdminConstats";

export const showCropImage = (src: string | null): ShowImageCrop => {
  return {
    type: SHOW_CROP_IMAGE,
    payload: src
  }
}
