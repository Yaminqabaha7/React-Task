export default function Post({ children, title, body }) {
  return (
    <div className="post">
      <h2 style={{ margin: "5px",textShadow:"2px 1px 3px red" }}>{children}</h2>
      <h2>{title}</h2>
      <hr style={{ margin: "10px" }} />
      <p>{body}</p>
    </div>
  );
}
