import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./ticketSlice";
import imagesReducer from "./imageSlices";

export const store = configureStore({
  reducer: {
    cart: ticketsReducer,
    images: imagesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
