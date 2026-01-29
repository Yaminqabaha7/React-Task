import { useState } from "react";
export default function Usestate() {
  const [name, setname] = useState("yamin");
  function clicck() {
    if (name == "yamin") setname("ahmad");
    else setname("yamin");
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={clicck}>click me</button>
    </div>
  );
}
