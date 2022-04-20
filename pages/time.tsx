import useAsiaTimeQuery from '@/query/useAsiaTimeQuery';

const Time = () => {
  const asiaTimeQuery = useAsiaTimeQuery();

  return (
    <>
      <h1>Seoul Timer 🕐🕘🕝</h1>
      <div>{asiaTimeQuery.data?.datetime}</div>
    </>
  );
};

export default Time;
