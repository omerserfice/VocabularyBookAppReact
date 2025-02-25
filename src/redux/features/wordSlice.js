import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiURL } from "../config"; 

export const fetchWords = createAsyncThunk("words/fetchWords",async () => {
    const response = await axios.get(`${apiURL}/Word`);
 
    return response.data;
});


const wordSlice = createSlice({
    name:"words",
    initialState: {
     data:[],
     loading:false,
     error:null,   
    },
    reducers:{},
    extraReducers:(builder)=> {
        builder
        .addCase(fetchWords.pending,(state)=> {
            state.loading = true;
        })
        .addCase(fetchWords.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
        .addCase(fetchWords.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
});

export default wordSlice.reducer;