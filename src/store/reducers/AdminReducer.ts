import {ShowImageCrop} from "../types/AdminActionTypes";
import {SHOW_CROP_IMAGE} from "../constants/AdminConstats";

const initialState: storeType = {
  cropImageSrc: null
}

interface storeType {
  cropImageSrc: string | null
}

export const AdminReducer = (state: storeType = initialState, action: ShowImageCrop) => {
  switch (action.type) {
    case SHOW_CROP_IMAGE: {
      return {
        ...state,
        cropImageSrc: action.payload
      }
    }
    default: {
      return state
    }
  }
}
