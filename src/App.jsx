import { useState } from "react";
import "./style/reset.css";
import "./style/global.css";
import { Dashbord } from "./components/Dashbord";
import { HomePage } from "./components/Home";

function App() {
  const [pages, setPage] = useState(true);

  return (
    <div className="App">
      {pages ? <HomePage event={setPage} /> : <Dashbord event={setPage} />}
    </div>
  );
}

export default App;
