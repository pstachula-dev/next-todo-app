import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "../TodoList";
import { TodoDTO } from "@/libs/dto/TodoDTO";

const user = userEvent.setup();

describe("TodoList", () => {
  const mockTodos: TodoDTO[] = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ];

  describe("Rendering", () => {
    it("renders all initial todos", () => {
      render(<TodoList todos={mockTodos} />);

      mockTodos.forEach((todo) => {
        // Check if each todo item is rendered
        expect(screen.getByText(todo.title)).toBeInTheDocument();
      });
    });

    it("renders todos with correct completion status", () => {
      render(<TodoList todos={mockTodos} />);

      const checkboxes = screen.getAllByRole("checkbox");

      // Verify first todo is unchecked
      expect(checkboxes[0]).not.toBeChecked();
      // Verify second todo is checked
      expect(checkboxes[1]).toBeChecked();
      // Verify third todo is unchecked
      expect(checkboxes[2]).not.toBeChecked();
    });

    it("renders filter dropdown with all options", () => {
      render(<TodoList todos={mockTodos} />);

      // Verify filter component exists
      expect(screen.getByTestId("todo-filters")).toBeInTheDocument();

      // Verify all filter options are present
      expect(screen.getByText("All")).toBeInTheDocument();
      expect(screen.getByText("Completed")).toBeInTheDocument();
      expect(screen.getByText("Uncompleted")).toBeInTheDocument();
    });
  });

  describe("Filtering", () => {
    it("shows all todos by default", () => {
      render(<TodoList todos={mockTodos} />);

      mockTodos.forEach((todo) => {
        // Verify initial state shows all todos
        expect(screen.getByText(todo.title)).toBeInTheDocument();
      });
    });

    it("filters completed todos correctly", async () => {
      render(<TodoList todos={mockTodos} />);

      await user.selectOptions(screen.getByTestId("todo-filters"), "completed");

      // Verify completed todo is shown
      expect(screen.getByText("Task 2")).toBeInTheDocument();
      // Verify incomplete todos are hidden
      expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Task 3")).not.toBeInTheDocument();
    });

    it("filters uncompleted todos correctly", async () => {
      render(<TodoList todos={mockTodos} />);

      await user.selectOptions(
        screen.getByTestId("todo-filters"),
        "uncompleted",
      );

      // Verify incomplete todos are shown
      expect(screen.getByText("Task 1")).toBeInTheDocument();
      expect(screen.getByText("Task 3")).toBeInTheDocument();
      // Verify completed todo is hidden
      expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
    });

    it("shows all todos when filter is changed from completed to all", async () => {
      render(<TodoList todos={mockTodos} />);

      const filterSelect = screen.getByTestId("todo-filters");
      await user.selectOptions(filterSelect, "completed");
      await user.selectOptions(filterSelect, "all");

      mockTodos.forEach((todo) => {
        // Verify all todos shown after filter reset
        expect(screen.getByText(todo.title)).toBeInTheDocument();
      });
    });
  });

  describe("Todo Item Interaction", () => {
    it("toggles todo completion status when checkbox is clicked", async () => {
      render(<TodoList todos={mockTodos} />);

      const firstTodoCheckbox = screen.getByLabelText("Task 1");

      // Verify initial unchecked state
      expect(firstTodoCheckbox).not.toBeChecked();

      await user.click(firstTodoCheckbox);

      // Verify checkbox toggled to checked
      expect(firstTodoCheckbox).toBeChecked();
    });

    it("maintains todo completion status after filtering", async () => {
      render(<TodoList todos={mockTodos} />);

      const firstTodoCheckbox = screen.getByLabelText("Task 1");
      await user.click(firstTodoCheckbox);

      const filterSelect = screen.getByTestId("todo-filters");
      await user.selectOptions(filterSelect, "completed");

      // Verify newly completed todo visible in completed filter
      expect(screen.getByText("Task 1")).toBeInTheDocument();
      // Verify checkbox state persists
      expect(screen.getByLabelText("Task 1")).toBeChecked();
    });

    it("updates filtered view when todo status changes", async () => {
      render(<TodoList todos={mockTodos} />);

      const filterSelect = screen.getByTestId("todo-filters");
      await user.selectOptions(filterSelect, "completed");

      // Verify incomplete todo hidden
      expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
      // Verify completed todo visible
      expect(screen.getByText("Task 2")).toBeInTheDocument();

      await user.selectOptions(filterSelect, "uncompleted");
      const firstTodoCheckbox = screen.getByLabelText("Task 1");
      await user.click(firstTodoCheckbox);

      // Verify todo disappears after completion
      expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    it("handles empty todo list", () => {
      render(<TodoList todos={[]} />);

      // Verify empty state message
      expect(screen.getByText("Empty todo list")).toBeInTheDocument();
    });

    it("handles filtering with empty results", async () => {
      render(
        <TodoList todos={[{ id: 1, title: "Task 1", completed: false }]} />,
      );

      await user.selectOptions(screen.getByTestId("todo-filters"), "completed");

      // Verify todo hidden when no matches
      expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    });
  });
});
