export default function SearchBar({ word, setWord, onSearch }) {
  return (
    <div>
      <div className="searc-bar">
        <input
          type="text"
          value={word}
          placeholder="Enter a word..."
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}
