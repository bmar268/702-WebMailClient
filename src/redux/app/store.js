import { configureStore } from "@reduxjs/toolkit";
import emailListDataSlice from "../features/listDataSlice";
import emailBodyDataSlice from "../features/bodyDataSlice";

export const store = configureStore({
    reducer: {
        emailList: emailListDataSlice,
        emailBody: emailBodyDataSlice
    },
});