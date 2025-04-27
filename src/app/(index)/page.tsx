import { Suspense } from "react";

import { getTodos } from "@/libs/http-methods/todos/getTodosRequest";
import { TodoList } from "@/modules/TodoList/TodoList";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main>
      <h1 className="my-4">TODO List</h1>
      <Suspense fallback={<div>Loading todo list...</div>}>
        <TodoList todos={todos} />
      </Suspense>
    </main>
  );
}
