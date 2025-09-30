import { API_URLS } from "../constants/urls";

export async function getAdvice() {
  const response = await fetch(API_URLS.ADVICE);
  const data = await response.json();
  return data;
}
