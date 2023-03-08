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

    const makeRequest = async (path, page) => {

        try {
            const { data, status } = await api(path, {
                params: {
                    _page: page,
                    _limit: 5
        },
            });
            console.log("consumo api", data);
            result.value = data;

        } catch (error) {
            console.error(error);
            errorData.value = error;
            throw error;
        }
    }

    return {
        result,
        errorData,
        makeRequest
    }
}