import { apiClient } from "../api/client";
import type { User } from "../types/user";

export function getUsers(){
    return apiClient<User[]>("/users");
}