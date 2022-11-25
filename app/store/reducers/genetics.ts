import { createSlice } from "@reduxjs/toolkit";
import { GeneticsSliceTypes } from "../types";

const GenticsSlice = createSlice({
  name: "adminlogin",
  initialState: {
    riskallloading: false,
    riskallerror: null,
    riskalldata: [],
    subhazard: null,
    subhazardloading: false,
    subhazarderror: null,
    risksnp: null,
    risksnploading: false,
    risksnperror: null
  } as GeneticsSliceTypes,
  reducers: {
    getRiskAllData: (state) => {
      state.riskallloading = true
      state.riskallerror = null
      state.riskalldata = []
    },
    getRiskAllDataSuccess: (state, action) => {
      state.riskallloading = false
      state.riskallerror = null
      state.riskalldata = action.payload.data?.hazards
    },
    getRiskAllDataFailed: (state, action) => {
      state.riskallloading = false
      state.riskallerror = action.payload.error
      state.riskalldata = action.payload.data
    },
    getSubHazardData: (state, action) => {
      state.subhazardloading = true
      state.subhazarderror = null
      state.subhazard = null
    },
    getSubHazardDataSuccess: (state, action) => {
      state.subhazardloading = false
      state.subhazarderror = null
      state.subhazard = action.payload.data
    },
    getSubHazardDataFailed: (state, action) => {
      state.subhazardloading = false
      state.subhazarderror = action.payload.error
      state.subhazard = action.payload.data
    },
    getRiskBySNPData: (state, action) => {
      state.risksnploading = true
      state.risksnperror = null
      state.risksnp = null
    },
    getRiskBySNPDataSuccess: (state, action) => {
      state.risksnploading = false
      state.risksnperror = null
      state.risksnp = action.payload.data
    },
    getRiskBySNPDataFailed: (state, action) => {
      state.risksnploading = false
      state.risksnperror = action.payload.error
      state.risksnp = action.payload.data
    },
  },
});

export default GenticsSlice.reducer;

export const {
  getRiskAllData,
  getRiskAllDataFailed,
  getRiskAllDataSuccess,
  getSubHazardData,
  getSubHazardDataFailed,
  getSubHazardDataSuccess,
  getRiskBySNPData,
  getRiskBySNPDataFailed,
  getRiskBySNPDataSuccess
} = GenticsSlice.actions;
