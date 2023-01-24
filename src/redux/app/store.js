import { configureStore } from "@reduxjs/toolkit";
import emailListSlice from "../features/data/listDataSlice";

export const store = configureStore({
    reducer: {
        emailList: emailListSlice,
    },
});