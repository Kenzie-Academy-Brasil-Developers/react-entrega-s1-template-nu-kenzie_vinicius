import "./style.css";
import ilustration from "../../assets/Illustration-home.svg";
import { Logo } from "../LogoKenzie";

export function HomePage({ event }) {
  return (
    <main className="container__main">
      <section className="section--one">
        <Logo />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button
          className="button__pages"
          onClick={() => {
            event(false);
          }}
        >
          Iniciar
        </button>
      </section>
      <section className="section--two">
        <img src={ilustration} alt="ilustração" />
      </section>
    </main>
  );
}
