import { all, fork, takeLatest } from "redux-saga/effects";
import { getRiskAllHandlers } from "../handlers/genetics";
import { getRiskAllData } from "../reducers/genetics";


export function* getRiskAllSaga() {
  yield takeLatest(getRiskAllData.type, getRiskAllHandlers);
}

export default function* RootSaga() {
  yield all([
    fork(getRiskAllSaga)
  ]);
}
