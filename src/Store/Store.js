import { configureStore } from '@reduxjs/toolkit'

import counterReducer from "../Store/features/CounterSlice"
import counterReducer2 from "../Store/features/Emailfeacture"
import counterReducer3 from "../Store/features/ApiCall"

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    counter2 : counterReducer2,
    counter3 : counterReducer3
  },
})