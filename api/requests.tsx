import axios from 'axios';

const API_URL = 'https://joba-network-staging.herokuapp.com/api/';

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUserData = async (id: string) => {
    const { data } = await instance.get(`/auth/user/${id}`);
    return data;
}