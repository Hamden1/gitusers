import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList } from "./users";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList)
  ];
}
