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
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ITicketInCart>) => {
      const existingTicket = state.tickets.find((ticket) => ticket.id === action.payload.id )
      if(existingTicket) {
        state.tickets[state.tickets.indexOf(existingTicket)].quantity ++;
      } else {

        state.tickets.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingTicket = state.tickets.find((ticket) => ticket.id === action.payload )
      if(existingTicket) {
        state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload)
      } 
    },
    updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number}>) => {
      state.tickets = state.tickets.map((ticket) => {
        if (ticket.id === action.payload.id) {
          return { ...ticket, quantity: action.payload.quantity };
        }
        return ticket;
      });
    }

  },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer