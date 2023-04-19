import axios from "axios";
import {API_URI} from "../utils/consts.js";

export default async () => {
    const users = await axios.get(`${API_URI}/api/users`);

    return { users: users.data };
};