import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import mainReducer from "../redux/Main/mainSlice";
import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, mainReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  // devTools: true
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);
