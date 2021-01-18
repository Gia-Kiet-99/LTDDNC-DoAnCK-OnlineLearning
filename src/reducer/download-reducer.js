import {
  ACTION_COUNT,
  ACTION_DOWNLOADED, ACTION_DOWNLOADING,
  ACTION_PROGRESS, ACTION_RESET_DOWNLOAD_STATE,
  DOWNLOADED_STATE,
  DOWNLOADING_STATE, downloadInitialState
} from "../globals/constants";

export const downloadReducer = (prevState, action) => {
  switch (action.type) {
    case ACTION_DOWNLOADING:
      return {...prevState, downloadState: DOWNLOADING_STATE}
    case ACTION_DOWNLOADED:
      return {...prevState, downloadState: DOWNLOADED_STATE, count: 0, progress: 0}
    case ACTION_PROGRESS:
      return {...prevState, progress: action.progress}
    case ACTION_COUNT:
      return {...prevState, count: prevState.count + 1, progress: 0}
    case ACTION_RESET_DOWNLOAD_STATE:
      return {...downloadInitialState}
    default:
      throw new Error()
  }
}