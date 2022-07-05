import React, { useState } from "react";

function Inventory() {
  const [inventory, setInventory] = useState([]);

  const addItem = () => {
    const newItem = {
      name: "",
      description: "",
      spaces: "",
      prestige: "",
    };

    setInventory([...inventory, newItem]);
  };

  const editItem = ({ target }) => {
    const { name, value, id } = target;
    const newItems = [...inventory];
    newItems[id][name] = value;
    setInventory(newItems);
  };

  const deleteItem = (id) => {
    const newItems = [...inventory];
    newItems.splice(id, 1);
    setInventory(newItems);
  }

  return (
    <div>
      <h2>INVENTARIO</h2>

      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>DETALHES</th>
            <th>ESPAÇOS</th>
            <th>PREST.</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  id={index}
                  value={item.name}
                  name="name"
                  onChange={editItem}
                  type="text"
                />
              </td>
              <td>
                <input
                  id={index}
                  value={item.description}
                  name="description"
                  onChange={editItem}
                  type="text"
                />
              </td>
              <td>
              <input
                  id={index}
                  value={item.spaces}
                  name="spaces"
                  onChange={editItem}
                  type="text"
                />
              </td>
              <td>
              <input
                  id={index}
                  value={item.prestige}
                  name="prestige"
                  onChange={editItem}
                  type="text"
                />
              </td>
              <td>
                <button
                    type="button"
                    onClick={() => deleteItem(index) }
                    >
                    -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={() => addItem()}>
        +
      </button>
    </div>
  );
}

export default Inventory;
