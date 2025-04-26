import { ChangeEvent } from "react";
import { TodoDTO } from "@/libs/dto/TodoDTO";

export const TodoItem = ({
  todo: { id, completed, title },
  onChange,
}: {
  todo: TodoDTO;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <li key={id}>
      <label className="flex items-center gap-4 p-2 rounded-md my-2 bg-zinc-700 hover:cursor-pointer hover:bg-zinc-800 transition">
        <input
          id={id.toString()}
          type="checkbox"
          onChange={onChange}
          defaultChecked={completed}
        />
        {title}
      </label>
    </li>
  );
};
