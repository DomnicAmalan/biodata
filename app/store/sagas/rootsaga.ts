import { all, fork, takeLatest } from "redux-saga/effects";
import { getRiskAllHandlers, getRiskSNPHandlers, getSubHazardHandlers } from "../handlers/genetics";
import { getRiskAllData, getRiskBySNPData, getSubHazardData } from "../reducers/genetics";


export function* getRiskAllSaga() {
  yield takeLatest(getRiskAllData.type, getRiskAllHandlers);
}

export function* getSubHazardSaga() {
  yield takeLatest(getSubHazardData.type, getSubHazardHandlers);
}

export function* getRiskSNPSaga() {
  yield takeLatest(getRiskBySNPData.type, getRiskSNPHandlers);
}

export default function* RootSaga() {
  yield all([
    fork(getRiskAllSaga),
    fork(getSubHazardSaga),
    fork(getRiskSNPSaga)
  ]);
}
