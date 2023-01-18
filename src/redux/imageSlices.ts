import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageObject } from "../aws";

// Define a type for the slice state
interface ImageObjectState {
  images: ImageObject;
  isLoading: boolean 
}

// Define the initial state using that type
const initialState: ImageObjectState = {
  images: {},
  isLoading: true
};

export const imageSlice = createSlice({
  name: "images",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageObject>) => {
      state.images = action.payload
      if(state.images !== initialState.images) {
        state.isLoading = false
      }
    },
  },
});

export const { setImages } = imageSlice.actions;


export default imageSlice.reducer;
