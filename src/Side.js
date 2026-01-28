import "./Side.css";
import But from "./but";
export default function Side() {
  const buttons = [
    { id: "1", title: "yamin" },
    {
      id: "2",
      title: "eba",
      c: (
        <img
          src="https://i.pinimg.com/736x/d5/15/35/d51535b625f052c7afe59aa41809450d.jpg"
          style={{ width: "50px", height: "50px" }}
        ></img>
      ),
    },
    {
      id: "3",
      title: "ahmad",
      c: (
        <>
          {" "}
          <h1>dddddd</h1>
          <img
            src="https://i.pinimg.com/736x/d5/15/35/d51535b625f052c7afe59aa41809450d.jpg"
            style={{ width: "60px", height: "79px" }}
          ></img>
        </>
      ),
    },
  ];
  const butlist = buttons.map((but) => {
    return <But key={but.id} title={but.title} children={but.c} />;
  });
  return <div className="side">{butlist}</div>;
}
