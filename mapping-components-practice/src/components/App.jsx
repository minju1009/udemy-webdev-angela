import React from "react";
import Edit from "./Edit";
import emojipedia from "../emojipedia";


function createEdit(emoji){
  return ( <Edit 
    key = {emoji.id}
    emoji = {emoji.emoji}
    name = {emoji.name}
    meaning = {emoji.meaning}
  />)
}


function App() {
  return (
    <React.StrictMode>
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createEdit)}
      </dl>
    </div>
    </React.StrictMode>
  );
}

export default App;
