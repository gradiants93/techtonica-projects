function Child(props) {
  return (
    <div className="child">
      <h2>Hello from child (React-side)</h2>
      <ul>
        {props.map((item, index) => (
          <li key={index}>
            Thing number {index} <img src={item} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;
