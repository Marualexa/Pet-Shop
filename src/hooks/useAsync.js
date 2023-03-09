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

    const makeRequest = async (path, params = {}) => {
        result.value = null;
        console.log('este es params', params);

        try {
            const { data } = await api(path, {
                params: params,
            });
            console.log("consumo api", data);
            result.value = data;
            isLoading.value = false;

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
        isLoading
    };
}