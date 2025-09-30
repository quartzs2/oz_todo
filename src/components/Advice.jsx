import useFetch from "../hooks/useFetch";
import { getAdvice } from "../api/getAdvice";

export const Advice = () => {
  const { data, isLoading } = useFetch({ query: getAdvice });

  return (
    <>
      {!isLoading && data && (
        <>
          <div>{data.message}</div>
          <div>-{data.author}-</div>
        </>
      )}
    </>
  );
};
