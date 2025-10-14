import { toast } from "react-toastify";
import axios from "../../../Api/AxiosConfig"
import { loadUser, removeUser } from "../userSlice";


export const asyncRegisterUser = (user) => async (dispatch, getState)=>{
    try {
        const {data} = await axios.post("/users", user);
        console.log(data);
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}

export const asyncLoginUser = (user) => async (dispatch, getState)=>{
    try {

       const {data}= await axios.get(`/users?email=${user.email}&password=${user.password}`);
       if (data.length === 0) {
            
            
            return false; // stop here if no user matched
        }

        
        localStorage.setItem("user", JSON.stringify(data[0]));
        dispatch(loadUser(data[0]));
        
        return true;
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}
export const asyncLogOutUser = (user) => async (dispatch, getState)=>{
    try {
       localStorage.removeItem("user")
       dispatch(removeUser())
        console.log("User logged out!");
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}

export const asyncCurrentUser = (user) => async (dispatch, getState) =>{
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) dispatch(loadUser(user))
            else console.log("User not found");
            
    } catch (error) {
        console.log(error);
        
    }
}
export const asyncUpdateUser = (id, user) => async(dispatch, getState) =>{
   const {data} =  await axios.patch("/users/"+id, user)
   console.log(data);
   
    localStorage.setItem("user", JSON.stringify(data));
}
export const asyncDeleteUser = (id, user) => async(dispatch, getState) =>{
   await axios.delete("/users/"+id);
   localStorage.removeItem("user")
   dispatch(asyncCurrentUser())
    
}