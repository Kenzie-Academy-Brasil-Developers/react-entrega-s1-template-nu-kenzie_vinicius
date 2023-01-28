import { useState } from "react";
import "./style.css";

export function Form({ input, value, type, cards }) {
  const [price, setPrice] = useState();

  return (
    <>
      <form>
        <div>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            placeholder="Digite aqiu sua descrição"
            onChange={(e) => {
              input(e.target.value);
            }}
          />
          <legend>Ex: Compra de roupa</legend>
        </div>
        <div className="value">
          <div>
            <label htmlFor="value">Valor</label>
            <input
              type="number"
              id="value"
              placeholder="1"
              onChange={(e) => {
                value(e.target.value);
                setPrice(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="typeValue">Tipo de valor</label>
            <select
              name=""
              id="typeValue"
              onChange={(e) => {
                type(e.target.value);
                e.target.value === "Saida"
                  ? value(Number(`-${price}`))
                  : value(Number(price));
              }}
            >
              <option value="">Tipo de valor</option>
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saida</option>
            </select>
          </div>
        </div>
        <button type="button" onClick={cards}>
          Insira valor
        </button>
      </form>
    </>
  );
}
