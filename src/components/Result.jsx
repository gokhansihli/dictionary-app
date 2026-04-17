import Definition from "./Definition";

export default function Result({ data }) {
  return (
    <div>
      {data.map((entry, i) => (
        <div key={i}>
          <h2>{entry.word}</h2>
          {entry.meanings.map((meaning, j) => (
            <div key={j}>
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.definitions.map((def, k) => (
                <Definition key={k} def={def} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
