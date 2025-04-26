import { getTodos } from "@/libs/http-methods/todos/getTodosRequest";
import { TodoList } from "@/modules/TodoList/TodoList";
import { Suspense } from "react";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="container mx-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Suspense fallback={<div>Loading...</div>}>
          <TodoList todosData={todos} />
        </Suspense>
      </main>
    </div>
  );
}
