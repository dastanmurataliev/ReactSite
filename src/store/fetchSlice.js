import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const createUser = createAsyncThunk(
    "createUser",
    async function(form) {
        const options = {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/users", options);
        const data  = await response.json();
        console.log(data);
    }

)
