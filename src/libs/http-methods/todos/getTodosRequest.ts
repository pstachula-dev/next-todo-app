import { TodoDTO } from "@/libs/dto/TodoDTO";
import { apiClient } from "../../api-client/api-client";

export const getTodos = async () => apiClient.get<TodoDTO[]>("/todos");
