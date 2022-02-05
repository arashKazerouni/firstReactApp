import { useState } from "react";

const WithCount = (WrappedComponent) => {
  const UpdatedComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} incrementCount={incrementCount}/>;
  };
  return UpdatedComponent
};

export default WithCount;
