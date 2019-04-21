import Axios from 'axios';
import { delay, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

/* global FETCH_URL */

export const FETCH_FILE = 'FETCH_FILE';
export const FETCH_FILE_FULFILLED = 'FETCH_FILE_FULFILLED';

export const fetchFile = fileId => ({
  type: FETCH_FILE,
  payload: fileId,
});

export const fetchFileFulfilled = payload => ({
  type: FETCH_FILE_FULFILLED,
  payload,
});

export const fileEpic = action$ => action$.pipe(
  ofType(FETCH_FILE),
  delay(1000),
  mergeMap(
    action => Axios({
      method: 'get',
      url: `${FETCH_URL}/api/file`,
      params: {
        fileId: action.payload,
      },
    })
      .then(response => fetchFileFulfilled(response.data.fileId ? response.data : { content: '' }))
      .catch(error => console.error(error)),
  ),
);
