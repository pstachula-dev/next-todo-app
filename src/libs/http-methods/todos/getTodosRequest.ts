import { TodoDTO } from "@/libs/dto/TodoDTO";

import { apiClient } from "../../api-client/api-client";

export const getTodos = async () => {
  return apiClient.get<TodoDTO[]>("/todos");
};
