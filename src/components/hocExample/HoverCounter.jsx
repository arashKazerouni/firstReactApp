import { useState } from "react";
import WithCount from "../hoc/withCount";

const HoverCounter = ({count,incrementCount}) => {
  return (
    <div>
      <h2 onMouseEnter={incrementCount}>
        mouse hovered {count} times
      </h2>
    </div>
  );
};

export default WithCount(HoverCounter);
