import axios from "axios";

const client = axios.create();

let token

//로그인, 회원가입

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
        token = `Bearer ${response.data.access_token}`;
        return true;
    } catch(error) {
        return;
    }
}

//todo
token = `Bearer ${localStorage.getItem('token')}`;

export const createTodo = async (todo) => {
    try {
        await client.post('todos', {todo}, {headers:{Authorization: token}});
    } catch(error) {
        console.log(error);
    }
}

export const getTodos = async () => {
    try {
        const response = await client.get('todos', {headers:{Authorization: token}});
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

export const updateTodos = async ({id, todo, isCompleted}) => {
    try {
        await client.put(`todos/${id}`, {todo, isCompleted}, {headers:{Authorization: token}});
    } catch(error) {
        console.log(error);
    }
}

export const deleteTodos = async (id) => {
    try {
        await client.delete(`todos/${id}`, {headers:{Authorization: token}});
    } catch(error) {
        console.log(error);
    }
}