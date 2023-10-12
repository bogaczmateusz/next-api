import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface CommonState {
  test: string
}

const initialState: CommonState = {
  test: "Test value."
}

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTest(state, action) {
      state.test = action.payload
    }
  }
})

export const { setTest } = commonSlice.actions
export const selectTest = (state: RootState) => state.common.test
export default commonSlice.reducer
