import { configureStore } from '@reduxjs/toolkit'
import demoSlice from "./slice/geolocation"

//crated a store
const store = configureStore({
    reducer: {
        demo: demoSlice
    }
})

export default store