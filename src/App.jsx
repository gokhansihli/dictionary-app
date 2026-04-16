import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchWord } from "./api";
import Result from "./components/Result";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!word) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await fetchWord(word);
      setResult(data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <SearchBar word={word} setWord={setWord} onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && { error }}
      {result && <Result data={result} />}
    </>
  );
}

export default App;
