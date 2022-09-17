import { createSlice } from '@reduxjs/toolkit'
import  axios  from 'axios'


const initialState = {
  value: [],
}

export const counterSlicer3 = createSlice({
    name: 'counter3',
    initialState,
    reducers: {
        apiCall: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { apiCall } = counterSlicer3.actions

export const apiAsync  = () => async (dispatch) => {
    const response = await axios.get("https://picsum.photos/v2/list")
    
    dispatch(apiCall(response.data))
}

export default counterSlicer3.reducer

