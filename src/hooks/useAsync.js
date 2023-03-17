import { ref } from "vue";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});

export function useAsync() {

    const result = ref(null);
    const errorData = ref(null);
    const isLoading = ref(true);
    const cabecera = ref(null);

    const makeRequest = async (path, params = {}, method = 'get') => {
        result.value = null;
        console.log('este es params', params);

        try {
            const { data, headers } = await api(path, {
                params: params,
                method: method,
            });
            console.log("consumo api", headers);
            result.value = data;
            isLoading.value = false;
            cabecera.value = headers;

        } catch (error) {
            console.error(error);
            isLoading.value = false;
            errorData.value = error;
            throw error;
        }
    };

    return {
        result,
        errorData,
        makeRequest,
        isLoading,
        cabecera
    };
}