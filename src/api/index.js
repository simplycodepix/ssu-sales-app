import axios from 'axios';
import qs from 'querystring';
import { USERS } from '../store/types';

// const localApiURL = `http://localhost:8045/api`;
const apiURL = `http://sales.god-development.com/api`;

export const getProducts = async ({ limit, offset, interval }) => {
    const { data } = await axios.get(`${apiURL}/products/list?limit=${limit}&offset=${offset}&interval=${interval}`);
    return data;
}

export const getAverageCheck = async ({ interval }) => {
    const { data } = await axios.get(`${apiURL}/checks/average?interval=${interval}`);
    return data;
}

export const getPopularProducts = async ({ interval, limit }) => {
    const { data } = await axios.get(`${apiURL}/products/popular?interval=${interval}&limit=${limit}`);
    return data;
}

export const getCategoriesByProductIds = async ({ limit, interval }) => {
    const { data } = await axios.get(`${apiURL}/products/popularCategories?limit=${limit}&interval=${interval}`);
    return data;
}

export const getExpensiveCategories = async ({ limit, interval }) => {
    const { data } = await axios.get(`${apiURL}/products/expensiveCategories?limit=${limit}&interval=${interval}`);
    return data;
}

export const buyProducts = async (payload) => {
    const { data } = await axios.post(`${apiURL}/products/buy`, payload);
    return data;
}




export const getUserTableData = async () => {
    const { data } = await axios.get(`${apiURL}/crud/users/get`);
    return data;
}
export const registerUser = async (userData) => {
    const { data } = await axios.post(`${apiURL}/user/registration`, qs.stringify(userData));
    return data;
}

export const authUser = async (credentials) => {
    const { data } = await axios.post(`${apiURL}/user/login`, qs.stringify(credentials));
    return data;
}

export const getUserProfile = async ({ id }) => {
    const { data } = await axios.get(`${apiURL}/user/${id}`);
    return data;
}

// Delete

export const deleteUser = async ({ user_id }) => {
    const { data } = await axios.post(`${apiURL}/crud/users/delete`, qs.stringify({ user_id }));
    return data;
}

// Get Single

export const getSingleUser = async ({ user_id }) => {
    const { data } = await axios.get(`${apiURL}/crud/users/getSingle?user_id=${user_id}`);
    return data.user;
}

export const getSingle = async ({ table, payload }) => {
    let response;

    switch (table) {
        case USERS:
            response = await getSingleUser({ user_id: payload.id });
            break;
        default:
            break;
    }

    return response;
};

// Update

export const updateUser = async ({ payload }) => {
    const { data } = await axios.post(`${apiURL}/crud/users/update`, qs.stringify({ ...payload }));
    return data;
}

export const updateTable = async ({ table, payload }) => {
    let response;

    switch (table) {
        case USERS:
            response = await updateUser({ payload });
            break;
        default:
            break;
    }

    return response;
};