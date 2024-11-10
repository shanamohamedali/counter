import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if(count<10)
      setCount((prev)=> prev+1 );
    else
    alert("You have reached maximum limit.")
  };
  const onDecrement = () => {
    if(count>0)
      setCount((prev)=> prev-1 );
    alert("You have reached manimum limit.")
  };
  
  return (
    <div>
     <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
    </div>
  );
}

export default App;
