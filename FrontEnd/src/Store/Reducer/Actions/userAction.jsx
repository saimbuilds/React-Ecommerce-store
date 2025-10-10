import axios from "axios"

export const asyncGetUser = async ()=>{
    try {
        const response = await axios.get("/users");
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    
}