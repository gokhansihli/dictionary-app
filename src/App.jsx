import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <>
      <SearchBar word={word} setWord={setWord} />
    </>
  );
}

export default App;
