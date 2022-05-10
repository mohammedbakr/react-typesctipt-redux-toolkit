import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICustomer {
  customers: {
    id: string
    name: string
    food: string[]
  }[]
}

const initialState: ICustomer = {
  customers: []
}

interface IAddFoodToCustomer {
  id: string
  foodItem: string
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<ICustomer['customers'][0]>) => {
      state.customers.push(action.payload)
    },
    addFood: (state, action: PayloadAction<IAddFoodToCustomer>) => {
      state.customers.map(
        (customer) =>
          customer.id === action.payload.id &&
          customer.food.push(action.payload.foodItem)
      )
    }
  }
})

export const { addCustomer, addFood } = customerSlice.actions
export default customerSlice.reducer
