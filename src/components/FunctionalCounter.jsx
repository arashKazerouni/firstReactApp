import { useEffect, useState } from "react";

const FunctionalCounter = () => {
    const [name,setName]= useState("");
    const [count,setCount]= useState(0);
    useEffect(()=>{
        document.title= `clicked : ${count}`
        console.log("document title updating");
    },[count])
    return (
        <>
            <input type="text" 
            onChange={(e)=> setName(e.target.value)} 
            value={name}
            />
            <h1>{name}</h1>
            <button onClick={() =>setCount(count+1)}>
                count : {count}
            </button>
            </>
      );
}
 
export default FunctionalCounter;