import { configureStore } from '@reduxjs/toolkit'
import reservationReducer from '../features/reservation/slice'
import customerReducer from '../features/customer/slice'

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    customer: customerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
