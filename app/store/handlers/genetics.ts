import { call, put } from "redux-saga/effects";
import {
  getRiskAllDataFailed,
  getRiskAllDataSuccess
} from 'app/store/reducers/genetics'
import { GetRiskAllApi } from "app/api/genetics";

export function* getRiskAllHandlers() {
  try {
    const data: ReturnType<typeof GetRiskAllApi> = yield call(GetRiskAllApi);
    yield put(getRiskAllDataSuccess(data));
  } catch (e: any) {
    yield put(getRiskAllDataFailed(true));
  }
}
