export default function SelectButton(props) {
  return (
    <li className="Selected" key={props.key}>
      <article>
        <h1>{props.id}</h1>
        <p>{props.description}</p>
        <button onClick={() => props.removeSelectedBuyers(props.id)}>X</button>
      </article>
    </li>
  );
}
