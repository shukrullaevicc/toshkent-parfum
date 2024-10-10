import { configureStore } from "@reduxjs/toolkit";

import likeReducer from "../slices/likeSlice";
import cartReducer from "../slices/cartSlice";
import { api } from "../api";

export const store = configureStore({
   reducer: {
      like: likeReducer,
      cart: cartReducer,
      [api.reducerPath]: api.reducer,
   },
   middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(api.middleware),
});