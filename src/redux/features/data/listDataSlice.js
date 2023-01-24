import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEmailList } from "../../APIcallFunctions/getEmailList";

const initialState = {
    loading: false,
    loadingMsg: "",
    emailList: []
}

export const fetchEmailList = createAsyncThunk(
    "emailList/fetchEmailList",
    async (pageNumber) => {
        let data = await getEmailList(pageNumber);
        return data;
    }
);

export const emailListSlice = createSlice({
    name: 'emailList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEmailList.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchEmailList.fulfilled, (state, action) => {
            state.loading = false;
            state.loadingMsg = "";
            state.emailList = action.payload ?? [];
        });

        builder.addCase(fetchEmailList.rejected, (state) => {
            state.loading = false;
            state.loadingMsg = "Error occured while fetching email list.";
            state.emailList = [];
        });
    }
});

export default emailListSlice.reducer;