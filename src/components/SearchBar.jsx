export default function SearchBar({ word, setWord }) {
  return (
    <div>
      <div className="searc-bar">
        <input
          type="text"
          value={word}
          placeholder="Enter a word..."
          onChange={(e) => setWord(e.target.value)}
        />
        <button>Search</button>
      </div>
    </div>
  );
}
