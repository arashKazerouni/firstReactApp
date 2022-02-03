import { BsLockFill } from "react-icons/bs";
import { useEffect, useState } from "react/cjs/react.development";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log("hi arash");
      setCount(count + 1);
    }, 1000);
    return ()=>{
        console.log("CWUN");
        clearInterval(myTimer)
    }
  },[]);
  return <div>Functional Interval</div>;
};

export default FunctionalTimer;
