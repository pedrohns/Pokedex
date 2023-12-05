import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    init: null
}

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        change: (state, action) => {
            console.log(action)
            state.init = action.payload
        },
        decremented: state => {
            state.init -= 1
        }
    }
})

export const {change, decremented } = counterSlice.actions;

// export const store = configureStore({
//     reducer: counterSlice.reducer
// })

export default counterSlice.reducer;

