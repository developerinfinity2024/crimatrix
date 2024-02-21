import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import loginSlice from "./login/loginSlice";

export const store = configureStore({
  reducer: {
    app: loginSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
