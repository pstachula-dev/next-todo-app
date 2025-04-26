import { TodoDTO } from "@/libs/dto/TodoDTO";
import { useMemo } from "react";
import { FilterStatus } from "../TodoList.types";

export const useFilterByStatus = (todos: TodoDTO[], status: FilterStatus) => {
  return useMemo(() => {
    switch (status) {
      case "completed":
        return todos.filter(({ completed }) => completed);
      case "uncompleted":
        return todos.filter(({ completed }) => !completed);
      default:
        return todos;
    }
  }, [status, todos]);
};
