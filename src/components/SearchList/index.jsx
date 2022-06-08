import styles from "./SearchList.module.css";
import React, { useState } from "react";
import list from "../../assets/list";

// una lista de items
// mostrar esa lista dentro de un ul
// buscar por un input

const SearchList = () => {
  const { title, lista, container } = styles;

  // input controlado
  const [input, setInput] = useState("");

  // estado para manejar mi lista
  const [shoppingList, setShoppingList] = useState(list);

  const handleChange = (e) => {
    const keyWord = e.target.value;

    setInput(keyWord);
    const result = list.filter((item) =>
      item.titulo.toLowerCase().includes(keyWord.toLowerCase())
    );

    // list = result ❌ NO SE PUEDE HACER

    setShoppingList(result); // Actualizar mi estado de lista
  };

  return (
    <div className={container}>
      <h2 className={title}>Search List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
        className="input"
        placeholder="Buscar por titulo"
      />
      <ul className={lista}>
        {shoppingList.map(({ titulo, id }) => (
          <li key={id}>
            {titulo} <button>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
