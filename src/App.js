import "./App.css";
import Avatar from "./components/avatar";
import Count from "./components/counter";

function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar className="App-Logo" />
        <p>Hola {name}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about React
        </a>
      </header>
      <Count />
    </div>
  );
}

export default App;
