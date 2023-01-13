import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { ITicketInCart } from '../interfaces'

// Define a type for the slice state
interface CartState {
  tickets: ITicketInCart[]
}

// Define the initial state using that type
const initialState: CartState = {
  tickets: []
}

export const cartSlice = createSlice({
  name: 'tickets',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ITicketInCart>) => {
      const existingTicket = state.tickets.find((ticket) => ticket.id === action.payload.id )
      if(existingTicket) {
        state.tickets[state.tickets.indexOf(existingTicket)].quantity ++;
      } 
      state.tickets = [action.payload, ...state.tickets]
    }
  },
})

export const { addToCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTickets = (state: RootState) => state.tickets

export default cartSlice.reducer