import axios from 'axios';
import { AppConstant } from "../../constants";


export const apiProduct = {
    getAllProduct: async (params) => {
        const url = AppConstant.baseUrl + 'products';
        return await axios.get(url, params);
    },

    getOneProduct: async (productId, params) => {
        const url = AppConstant.baseUrl + `products/${productId}`;
        return await axios.get(url, params);
    }
};

export const apiAuth = {
    login: async (params) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const url = AppConstant.baseUrl + 'auth/login';
        return await axios.post(url, params, config);
    }
}

export const apiCart = {
    checkout: async (params) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const url = AppConstant.baseUrl + 'products/add';
        return await axios.post(url, params, config);
    }
}

export const apiPost = {
    getAllPost: async (params) => {
        const url = AppConstant.baseUrl + 'posts';
        return await axios.get(url, params);
    },

    getOnePost: async (postId, params) => {
        const url = AppConstant.baseUrl + `posts/${postId}`;
        return await axios.get(url, params);
    }
};