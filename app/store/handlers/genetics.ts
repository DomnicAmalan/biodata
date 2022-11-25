import { call, put } from "redux-saga/effects";
import {
  getRiskAllDataFailed,
  getRiskAllDataSuccess,
  getRiskBySNPDataFailed,
  getRiskBySNPDataSuccess,
  getSubHazardDataFailed,
  getSubHazardDataSuccess
} from 'app/store/reducers/genetics'
import { GetRiskAllApi, GetRiskyBySNPApi, GetSubhazardApi } from "app/api/genetics";

export function* getRiskAllHandlers() {
  try {
    const data: ReturnType<typeof GetRiskAllApi> = yield call(GetRiskAllApi);
    yield put(getRiskAllDataSuccess(data));
  } catch (e: any) {
    yield put(getRiskAllDataFailed(true));
  }
}

export function* getSubHazardHandlers(action: any) {
  try {
    const data: ReturnType<typeof GetSubhazardApi> = yield call(GetSubhazardApi, action.payload);
    yield put(getSubHazardDataSuccess(data));
  } catch (e: any) {
    yield put(getSubHazardDataFailed(true));
  }
}

export function* getRiskSNPHandlers(action: any) {
  try {
    const data: ReturnType<typeof GetRiskyBySNPApi> = yield call(GetRiskyBySNPApi, action.payload);
    yield put(getRiskBySNPDataSuccess(data));
  } catch (e: any) {
    yield put(getRiskBySNPDataFailed(true));
  }
}
