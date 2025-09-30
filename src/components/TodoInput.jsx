import { useRef } from "react";

const ENTER_KEY = "Enter";

export const TodoInput = ({ onAddTodo }) => {
  const inputRef = useRef(null);

  const handleAddClick = async () => {
    const content = inputRef.current.value.trim();

    if (content === "") {
      alert("Todo 내용을 입력해주세요.");
      return;
    }

    await onAddTodo(content);
    inputRef.current.value = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === ENTER_KEY) {
      handleAddClick();
    }
  };

  return (
    <>
      <input ref={inputRef} onKeyDown={handleKeyDown} placeholder="할 일을 입력하세요" />
      <button onClick={handleAddClick}>추가</button>
    </>
  );
};
