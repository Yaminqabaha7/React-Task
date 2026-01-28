export default function But({ title, children }) {
  return (
    <div>
      {title == null || title == "" ? null : (
        <button className="but">
          <p>{title}</p>
          {children}
        </button>
      )}
    </div>
  );
}
