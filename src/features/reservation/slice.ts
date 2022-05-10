import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IReservation {
  reservations: string[]
}

const initialState: IReservation = {
  reservations: []
}

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.reservations.push(action.payload)
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.reservations.splice(action.payload, 1)
    }
  }
})

export const { addReservation, removeReservation } = reservationSlice.actions
export default reservationSlice.reducer
