import { Logo } from "../LogoKenzie";
import "./style.css";

export function HeaderDashbord({ event }) {
  return (
    <header className="container__header">
      <Logo />
      <button
        className="button__pages"
        onClick={() => {
          event(true);
        }}
      >
        Inicio
      </button>
    </header>
  );
}
