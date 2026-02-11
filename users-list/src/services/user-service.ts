import axios from "axios";
import type { User } from "../types/types";

export const api = axios.create({
	baseURL: "https://698bac606c6f9ebe57bd50dc.mockapi.io/users",
	timeout: 5000,
});

export const getUsers = async () => {
	const result = await api.get("/users");
	return result.data;
};

export const createUser = async (user: User) => {
	const result = await api.post("/users", user);
	return result.data;
};
