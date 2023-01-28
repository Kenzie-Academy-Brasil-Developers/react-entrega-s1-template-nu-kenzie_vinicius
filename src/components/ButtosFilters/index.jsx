export function ButtonsFilters({
  allBool,
  inputBool,
  outputBool,
  setAll,
  setInput,
  setOutput,
  list,
}) {
  return (
    <>
      <button
        className="button__all"
        type="button"
        onClick={() => {
          setAll(list.filter((card) => card));
          inputBool(false);
          allBool(true);
          outputBool(false);
        }}
      >
        Todos
      </button>
      <button
        className="button"
        type="button"
        onClick={() => {
          setInput(list.filter((card) => card.type === "Entrada"));
          inputBool(true);
          allBool(false);
          outputBool(false);
        }}
      >
        Entradas
      </button>
      <button
        className="button"
        type="button"
        onClick={() => {
          setOutput(list.filter((card) => card.type === "Saida"));
          inputBool(false);
          allBool(false);
          outputBool(true);
        }}
      >
        Dispesas
      </button>
    </>
  );
}
