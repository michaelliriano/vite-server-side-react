import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [name, setName] = React.useState("");
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => setName("Michael")}>Changing name</button>
      <button onClick={() => setName("Mike")}>Reset</button>
      <Link to="/">Home</Link>
    </div>
  );
}
