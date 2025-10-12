import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    users : []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   loadUser: (state, action) =>{
    state.users = action.payload;
    // console.log(state.users)
   },
   removeUser: (state, action)=>{
    state.users = null;
   }
  },
})




export default userSlice.reducer;
export const {loadUser, removeUser} = userSlice.actions