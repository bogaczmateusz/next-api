import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { commonSlice } from "./slices/common.slice"

const rootReducer = combineReducers({
  [commonSlice.name]: commonSlice.reducer
})

export function makeStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
