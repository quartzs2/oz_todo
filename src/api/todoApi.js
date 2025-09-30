import { API_URLS } from "../constants/urls";

/**
 * 새로운 Todo를 서버에 추가합니다.
 * @param {string} content - Todo 내용
 * @returns {Promise<Object>} 생성된 Todo 객체
 */
export async function createTodo({ content }) {
  const response = await fetch(API_URLS.TODO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
}

/**
 * Todo를 서버에서 삭제합니다.
 * @param {number} id - 삭제할 Todo의 ID
 * @returns {Promise<void>}
 */
export async function deleteTodo({ id }) {
  const response = await fetch(`${API_URLS.TODO}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
}
