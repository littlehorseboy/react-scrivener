// import Axios from 'axios';
import { ajax } from 'rxjs/ajax';
import { delay, map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

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
    action => ajax
      .getJSON(`https://api.github.com/users/${action.payload}`).pipe(
        map(response => fetchFileFulfilled(response)),
      ),
  ),
);
