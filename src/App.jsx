import { useState } from "react";
import "./App.css";
import { Advice } from "./components/Advice";
import { Timer } from "./components/Timer";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { createTodo, deleteTodo } from "./api/todoApi";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Number(new Date()),
      content: "안녕하세요",
    },
  ]);

  const handleAddTodo = async (content) => {
    try {
      const newTodo = await createTodo({ content });
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error("Failed to add todo:", error);
      alert("Todo 추가에 실패했습니다.");
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo({ id });
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
      alert("Todo 삭제에 실패했습니다.");
    }
  };

  return (
    <>
      <Advice />
      <Timer />
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
