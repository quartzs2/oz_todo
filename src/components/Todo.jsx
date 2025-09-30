export const Todo = ({ todo, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      {todo.content}
      <button onClick={handleDeleteClick}>삭제</button>
    </li>
  );
};
