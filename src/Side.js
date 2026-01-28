import "./Side.css";
import But from "./but";
export default function Side() {
  return (
    <div className="side">
      <But title="yamin" />
      <But title="eba">
        <img
          src="https://i.pinimg.com/736x/d5/15/35/d51535b625f052c7afe59aa41809450d.jpg"
          style={{ width: "50px", height: "50px" }}
        ></img>
      </But>
      <But className="bu11" title="ahmad" >
        <p>dddddd</p>
        <img
          src="https://i.pinimg.com/736x/d5/15/35/d51535b625f052c7afe59aa41809450d.jpg"
          style={{ width: "60px", height: "79px" }}
        ></img>
      </But>
    </div>
  );
}
