import "./style.css";

export function Total({ balance }) {
  return (
    <div className="balance">
      <div>
        <h3>Valor total:</h3>
        <span>R$ {balance}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
