export default function But({title,children}){
    return (

  <button className="but">
    <p>{title}</p>
    {children}
  </button>
    );
}