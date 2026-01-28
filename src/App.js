import "./App.css";

import Header from "./headerComponent";
import Post from "./post";
import Side from "./Side.js";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ margin: "auto", display: "flex" }}>
        <div style={{ width: "70%" }}>
          <Post title="this is the post title" body="body" />
          <Post title=" title" body="body gfdgg" />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="">
          <Side />
        </div>
      </div>
    </div>
  );
}

export default App;
