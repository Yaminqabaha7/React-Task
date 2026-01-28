import "./App.css";
import Header from "./headerComponent";
import Post from "./post";
import Side from "./Side.js";
function App() {
  const posts = [
    { id: "1", title: "this is the post title", body: "body" },
    { id: "2", title: " hello world", body: "body 2" },
    { id: "3", title: "Post 3", body: "body 3" },
  ];
  const postlist = posts.map((post) => {
    return <Post key={post.id} title={post.title} />;
  });
  return (
    <div className="App">
      <Header />
      <div style={{ margin: "auto", display: "flex" }}>
        <div style={{ width: "70%" }}>{postlist}</div>
        <div className="">
          <Side />
        </div>
      </div>
    </div>
  );
}

export default App;
