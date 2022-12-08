import { useState } from "react";
import "./App.css";

function App() {
  const [src, setSrc] = useState("");
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=CXSnW8CrqqAdb2fpMSNtOeDbBhRo2agF&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      setSrc(response.data.images.original.url);
    });

  return (
    <div className="App">
      <h1>This is App</h1>
      <img src={src} alt="sth"></img>
    </div>
  );
}

export default App;
