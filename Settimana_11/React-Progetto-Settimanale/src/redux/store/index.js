import mainReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const localMusic = {
  key: "root",
  storage: storage
};
const persistedReducer = persistReducer(localMusic, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableLevel: false }),
});
export const persistor = persistStore(store);
