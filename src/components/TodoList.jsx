import { Todo } from "./Todo";

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDeleteTodo} />
      ))}
    </ul>
  );
};
