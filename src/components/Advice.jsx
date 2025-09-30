import useFetch from "../hooks/useFetch";
import { getAdvice } from "../api/getAdvice";

export const Advice = () => {
  const { data, isLoading, isError } = useFetch({ query: getAdvice });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <>
      {data && (
        <>
          <div>{data.message}</div>
          <div>-{data.author}-</div>
        </>
      )}
    </>
  );
};
