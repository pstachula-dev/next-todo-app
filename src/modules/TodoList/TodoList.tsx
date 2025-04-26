"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { FilterStatus } from "./TodoList.types";
import { TodoItem } from "./components/TodoItem";
import { TodoDTO } from "@/libs/dto/TodoDTO";
import { TodoFilters } from "./components/TodoFilters";
import { useFilterByStatus } from "./hooks/useFilterByStatus";

export const TodoList = ({ todosData }: { todosData: TodoDTO[] }) => {
  const [todos, setTodos] = useState(todosData);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const todoByFilter = useFilterByStatus(todos, filter);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, checked } = event.target;

      const updatedTodos = todos.map((todo) =>
        todo.id === parseInt(id) ? { ...todo, completed: checked } : todo,
      );
      setTodos(updatedTodos);
    },
    [todos],
  );

  return (
    <div>
      <h1>Todo List</h1>

      <TodoFilters filter={filter} onChange={setFilter} />

      <ul>
        {todoByFilter.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onChange={onChange} />
        ))}
      </ul>
    </div>
  );
};
