import { createSlice } from "@reduxjs/toolkit";
import { GeneticsSliceTypes } from "../types";

const GenticsSlice = createSlice({
  name: "adminlogin",
  initialState: {
    riskallloading: false,
    riskallerror: null,
    riskalldata: []
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
  },
});

export default GenticsSlice.reducer;

export const {
  getRiskAllData,
  getRiskAllDataFailed,
  getRiskAllDataSuccess
} = GenticsSlice.actions;
