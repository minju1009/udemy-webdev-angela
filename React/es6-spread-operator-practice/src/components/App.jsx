
import React, {useState} from "react";
import Item from './ToDoItem';

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  function handleChange(event){
    const value = event.target.value;
    setNewItem(value);
  }

  function handleClick(){
    setItemArray(prevValue => {return [...prevValue, newItem]});
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={handleClick} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map(item => <Item text={item} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
