import { useEffect, useRef, useState } from "react";
const FunctinalRef = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const prevInput = useRef();
  const prevCount = useRef();
  useEffect(() => {
    prevInput.current = input;
  }, [input]);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>
        {" "}
        your name is {input} and it was {prevInput.current}
      </p>
      <br />

      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        generate random
      </button>
      <p>count : {count}</p>
      <p>previous count : {prevCount.current}</p>
    </div>
  );
};

export default FunctinalRef;
