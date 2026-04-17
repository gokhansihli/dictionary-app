export default function Definition({ def }) {
  return (
    <div>
      <p>{def.definition}</p>
      {def.example && <em>Example: {def.example}</em>}
      {def.synonyms && def.synonyms.length > 0 && (
        <p>Synonyms: {def.synonyms.join(", ")}</p>
      )}
    </div>
  );
}
