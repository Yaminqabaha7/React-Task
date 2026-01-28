import "./post.css";
export default function Post({title,body}) {
  return (
    <div className="post">
      <h2>{title}</h2>
     <hr style={{margin:"px"}}/>
      <p>{body}</p>
    </div>
  );
}
