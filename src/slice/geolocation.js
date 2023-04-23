import { createSlice } from '@reduxjs/toolkit'

//created a slice
const demoSlice = createSlice({
    name: "geoLocation",
    initialState: {
        currentDay: {},
        foreCast: [],
        selectedcity: {},
    },
    reducers: {
        currentDay:
            (state, action) => {
                state.currentDay = action.payload
            },
        foreCast:
            (state, action) => {
                state.foreCast = action.payload
            },

    }
})

//exported reducer
export const { foreCast, currentDay } = demoSlice.actions

//default export the slice
export default demoSlice.reducer