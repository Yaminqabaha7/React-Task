import { useState } from "react";

export default function Arraystate() {
  const [devicse, setdvice] = useState("");
  const [arrdvices, setarrdvis] = useState([
    { id: 1, name: "14Pro" },
    { id: 2, name: "15Pro" },
    { id: 3, name: "16Pro" },
  ]);

  function dleateitem(id) {
    setarrdvis(arrdvices.filter((d) => d.id !== id));
  }

  function edititem(id) {
    setarrdvis(
      arrdvices.map((d) => (d.id === id ? { ...d, name: d.name + "0" } : d))
    );
  }

  return (
    <div className="list">
      <ul>
        {arrdvices.map((d) => (
          <li key={d.id}>
            {d.name}
            <button onClick={() => dleateitem(d.id)}>delete</button>
            <button onClick={() => edititem(d.id)}>edit</button>
          </li>
        ))}
      </ul>

      <input value={devicse} onChange={(e) => setdvice(e.target.value)} />

      <button
        onClick={() => {
          if (devicse.trim() === "") return;
          setarrdvis([
            ...arrdvices,
            { id: arrdvices.length + 1, name: devicse },
          ]);
          setdvice("");
        }}
      >
        +
      </button>
    </div>
  );
}
