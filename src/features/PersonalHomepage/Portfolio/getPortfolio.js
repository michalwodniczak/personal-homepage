import axios from "axios";

const URL = "https://api.github.com/users/widmo200/repos";

export const getRespositores = async () => {
    try {
        const response = await axios.get(URL);
        const repo = response.data;
        return repo;
    } catch (error) {
        throw new Error("Failed to fetch repositories");
    };

};