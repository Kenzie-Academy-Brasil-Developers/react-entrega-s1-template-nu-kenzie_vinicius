import "./style.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form } from "../form";
import { UlRenderCard } from "../CardsList";
import { HeaderDashbord } from "../HeaderDashbord";
import { ButtonsFilters } from "../ButtosFilters";
import { Total } from "../Total";
import { Sum } from "../TotalSum";

export function Dashbord({ event }) {
  const [listTransactions, setListTransactions] = useState([
    {
      description: "Salário recebido",
      type: "Entrada",
      value: 2500,
      id: uuid(),
    },
    { description: "Conta de luz", type: "Saida", value: -150, id: uuid() },
  ]);

  const [filterListInput, setFilterListInput] = useState();
  const [filterListOutput, setFilterListOutput] = useState();

  const [boolAll, setBoolAll] = useState(false);
  const [boolInput, setBoolInput] = useState(false);
  const [boolOutput, setBoolOutput] = useState(false);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [typeValue, setTypeVale] = useState("");

  function renderCards() {
    const newCards = {
      description: description,
      type: typeValue,
      value: value,
      id: uuid(),
    };

    setListTransactions([...listTransactions, newCards]);
  }

  function renderUlCards() {
    if (boolInput) {
      return filterListInput;
    } else if (boolOutput) {
      return filterListOutput;
    } else {
      return listTransactions;
    }
  }
  return (
    <>
      <HeaderDashbord event={event} />
      <main className="container__main--deshbord">
        <section className="section--one--deshbord">
          <div>
            <Form
              input={setDescription}
              value={setValue}
              type={setTypeVale}
              cards={renderCards}
            />
          </div>
          <Total balance={Sum(listTransactions)} />
        </section>
        <section className="section--two--deshbord">
          <div>
            <h3>Resumo financeiro</h3>
            <ButtonsFilters
              allBool={setBoolAll}
              inputBool={setBoolInput}
              outputBool={setBoolOutput}
              setAll={setListTransactions}
              setInput={setFilterListInput}
              setOutput={setFilterListOutput}
              list={listTransactions}
            />
          </div>
          <UlRenderCard cards={renderUlCards} setCard={setListTransactions} />
        </section>
      </main>
    </>
  );
}
