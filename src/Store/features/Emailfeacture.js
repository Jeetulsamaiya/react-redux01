import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value1: "",
    value2: ""
  }

export const counterSlice2 = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
      emailhandler: (state, action) => {
        state.value1 = action.payload
      },
      passwordhandler: (state, action) => {
        state.value2 = action.payload
      }
    },
  })


export const { emailhandler, passwordhandler } = counterSlice2.actions

export default counterSlice2.reducer
