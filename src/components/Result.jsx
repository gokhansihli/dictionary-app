export default function Result({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((entry, i) => (
        <div key={i}>
          <h2>{entry.word}</h2>
          {entry.meanings.map((meaning, j) => (
            <div key={j}>
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.definitions.map((def, k) => (
                <div key={k}>
                  <p>{def.definition}</p>
                  {def.example && <em>Example: {def.example}</em>}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
