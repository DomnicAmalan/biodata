import { all, fork, takeLatest } from "redux-saga/effects";
import { getRiskAllHandlers, getSubHazardHandlers } from "../handlers/genetics";
import { getRiskAllData, getSubHazardData } from "../reducers/genetics";


export function* getRiskAllSaga() {
  yield takeLatest(getRiskAllData.type, getRiskAllHandlers);
}

export function* getSubHazardSaga() {
  yield takeLatest(getSubHazardData.type, getSubHazardHandlers);
}

export default function* RootSaga() {
  yield all([
    fork(getRiskAllSaga),
    fork(getSubHazardSaga)
  ]);
}
