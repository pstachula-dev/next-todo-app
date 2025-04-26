import { FilterStatus } from "../TodoList.types";

export const TodoFilters = ({
  onChange,
  filter,
}: {
  onChange: (value: FilterStatus) => void;
  filter: FilterStatus;
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as FilterStatus);
  };

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};
