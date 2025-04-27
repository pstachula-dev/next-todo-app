"use client";

import { ChangeEvent, useCallback, useState } from "react";

import { TodoDTO } from "@/libs/dto/TodoDTO";

import { TodoFilters } from "./components/TodoFilters";
import { TodoItem } from "./components/TodoItem";
import { useFilterByStatus } from "./hooks/useFilterByStatus";
import { FilterStatus } from "./TodoList.types";

export const TodoList = ({ todos: todosData }: { todos: TodoDTO[] }) => {
  const [todos, setTodos] = useState(todosData);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const todoByFilter = useFilterByStatus(todos, filter);

  const onTodoItemChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, checked: completed } = event.target;

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === parseInt(id) ? { ...todo, completed } : todo,
        ),
      );
    },
    [],
  );

  const hasTodos = todoByFilter.length > 0;

  return (
    <div>
      <div className="flex gap-4 items-center mb-4">
        <TodoFilters filter={filter} onChange={setFilter} />

        {hasTodos && <span>{todoByFilter.length} todos</span>}
      </div>

      {hasTodos && (
        <ul>
          {todoByFilter.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onChange={onTodoItemChange} />
          ))}
        </ul>
      )}

      {!hasTodos && <span>Empty todo list</span>}
    </div>
  );
};
