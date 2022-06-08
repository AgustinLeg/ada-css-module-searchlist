import "./App.css";

import { CurrencyConverter } from "./components/CurrencyConverter";
import SearchList from "./components/SearchList";


function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="title">Ada Clase - 100 - CSS module + SearchList</h1>
      </nav>
      <CurrencyConverter />
      <SearchList />
    </div>
  );
}

export default App;
