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