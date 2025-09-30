import { API_URLS } from "../constants/urls";

export function getAdvice() {
  return fetch(API_URLS.ADVICE).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText); // 임의로 오류 메시지 반환
    }
    return response;
  });
}
