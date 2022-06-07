import { useState } from "react";

function Example() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function Add(event) {
    event.preventDefault();
    setItems([
      ...items,
      {
        name: item,
      },
    ]);
    setItem("");
  }
  function Delete() {
    setItems(item.name.remove());
  }

  return (
    <>
      <form onSubmit={Add}>
        <input
          name="item"
          type="text"
          value={item}
          placeholder="Type hire"
          onChange={(item) => setItem(item.target.value)}
        />
         <button onClick={Add}>Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <ol>
            <li>
            {item.name}
            <button onCl ick={Delete}>-</button>
            </li>
          </ol>
        ))}
      </ul>
    </>
  );
}

export default Example;
