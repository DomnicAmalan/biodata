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
    subhazarderror: null
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
      state.subhazard = []
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
  },
});

export default GenticsSlice.reducer;

export const {
  getRiskAllData,
  getRiskAllDataFailed,
  getRiskAllDataSuccess,
  getSubHazardData,
  getSubHazardDataFailed,
  getSubHazardDataSuccess
} = GenticsSlice.actions;
