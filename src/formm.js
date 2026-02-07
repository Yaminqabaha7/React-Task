import { useState } from "react";
export default function Form11() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    genralinfo: "",
    isstudent: false,
    city: "",
    status: "",
  });
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form);
        }}
      >
        <div className="div1">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Age</label>
            <input
              type="number"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
          </div>
        </div>
        <label>is student</label>
        <input
          type="checkbox"
          checked={form.isstudent}
          onChange={(v) => {
            setForm({ ...form, isstudent: v.target.checked });
          }}
        />
        <select
          value={form.city}
          onChange={(v) => {
            setForm({ ...form, city: v.target.value });
          }}
        >
          <option>jenin</option>
          <option>Nablus</option>
          <option>Tulkarem</option>
        </select>
        <div>
          <input
            type="radio"
            value="Sudent"
            checked={form.status == "Sudent"}
            onChange={(v) => {
              setForm({ ...form, status: v.target.value });
            }}
          />
          Sudent
          <input
            type="radio"
            value="Teacher"
            checked={form.status == "Teacher"}
            onChange={(v) => {
              setForm({ ...form, status: v.target.value });
            }}
          />
          Teacher
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            rows="4"
            value={form.genralinfo}
            onChange={(e) => {
              setForm({ ...form, genralinfo: e.target.value });
            }}
          />
        </div>

        <button className="btn">Submit</button>
      </form>
    </>
  );
}
