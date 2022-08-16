import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postArray:[],
    pageCount:2
}

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.postArray = state.postArray.concat(action.payload)
        },
        increasePageCount:(state)=>{
            state.pageCount += 1;
        }
    }
})

export const {addPost,increasePageCount} = postSlice.actions

export default postSlice.reducer