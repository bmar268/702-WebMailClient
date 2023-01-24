import { configureStore } from "@reduxjs/toolkit";
import emailListDataSlice from "../features/data/listDataSlice";
import emailBodyDataSlice from "../features/data/bodyDataSlice";

export const store = configureStore({
    reducer: {
        emailList: emailListDataSlice,
        emailBody: emailBodyDataSlice
    },
});