import { useState } from "react";
export default function Form11() {
  const [forminput, setforminput] = useState({ name: "", email: "" });
  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <label> name</label>
        <input
          value={forminput.name}
          onChange={(as) => {
            setforminput({ name: as.target.value });
          }}
        />
        <label> email</label>
        <input
          value={forminput.email}
          onChange={(as) => {
            setforminput({ email: as.target.value });
          }}
        />
        <button>sumbet</button>
      </form>
    </>
  );
}
