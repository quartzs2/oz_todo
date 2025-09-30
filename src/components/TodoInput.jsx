import { useRef } from "react";
import { API_URLS } from "../constants/urls";

export const TodoInput = ({ setTodo }) => {
  const inputRef = useRef(null);

  const addTodo = () => {
    const newTodo = {
      content: inputRef.current.value,
    };
    fetch(API_URLS.TODO, {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    setTodo((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={addTodo}>추가</button>
    </>
  );
};
