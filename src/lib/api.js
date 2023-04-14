import axios from "axios";

const client = axios.create();

export const signUp = async ({email, password}) => {
    try {
        await client.post('auth/signup', {email, password});
    } catch(error) {
        //console.log(error.response.data.message);
        return error.response.data.message;
    }
}
    

export const signIn = async ({email, password}) => {
    try {
        const response = await client.post('auth/signin', {email, password});
        localStorage.setItem('token',response.data.access_token);
        return response.data.access_token;
    } catch(error) {
        return;
    }
}
