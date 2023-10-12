import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { commonSlice } from "./slices/common.slice"

const combinedReducer = combineReducers({
  [commonSlice.name]: commonSlice.reducer
})

export function makeStore() {
  return configureStore({
    reducer: combinedReducer
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
