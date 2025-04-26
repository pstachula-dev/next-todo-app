import { FilterStatus } from "@/modules/TodoList/TodoList.types";

export const isFilterStatusGuard = (value: string): value is FilterStatus => {
  return ["all", "completed", "uncompleted"].includes(value);
};
