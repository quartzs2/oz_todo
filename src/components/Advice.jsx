import { useFetch } from "../hooks/useFetch";
import { API_URLS } from "../constants/urls";

export const Advice = () => {
  const [isLoading, data] = useFetch(API_URLS.ADVICE);

  return (
    <>
      {!isLoading && (
        <>
          <div>{data.message}</div>
          <div>-{data.author}-</div>
        </>
      )}
    </>
  );
};
