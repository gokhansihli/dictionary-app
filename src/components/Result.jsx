export default function Result({ data }) {
  return (
    <div>
      {data.map((entry, i) => {
        return (
          <div key={i}>
            <h2>{entry.word}</h2>
          </div>
        );
      })}
    </div>
  );
}
