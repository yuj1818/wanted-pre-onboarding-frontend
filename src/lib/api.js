import axios from "axios";

const client = axios.create();

export const signUp = ({email, password}) => {
    client.post('auth/signup', {email, password});
    console.log(email, password)
}
    

export const singIn = ({email, password}) =>
    client.post('auth/signin', {email, password});