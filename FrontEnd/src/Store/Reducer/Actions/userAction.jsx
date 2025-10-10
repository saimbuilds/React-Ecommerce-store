import axios from "../../../Api/AxiosConfig"

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
       localStorage.setItem("user", JSON.stringify(data[0]))
       
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}
export const asyncLogOutUser = (user) => async (dispatch, getState)=>{
    try {
       localStorage.removeItem("")
       
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}
