import { useState } from "react";
import WithCount from "../hoc/withCount";

const ClickCounter = ({count,incrementCount}) => {
  return <button onClick={incrementCount}>count : {count}</button>;
};

export default WithCount(ClickCounter);
