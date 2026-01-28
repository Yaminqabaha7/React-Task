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
          <Post title="this is the post title" body="body">
            <h1>Yamin Qabaha</h1>
          </Post>
          <Post title=" hello world" body="body 2" />
          <Post title=" Post 3" body="body 3" />
        </div>
        <div className="">
          <Side />
        </div>
      </div>
    </div>
  );
}

export default App;
