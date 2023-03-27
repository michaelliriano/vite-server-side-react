import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <Link to="/about">About</Link>
    </div>
  );
}
