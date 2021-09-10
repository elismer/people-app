import EditPerson from "./pages/Edit";
import People from "./pages/People";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/edit">Editar</Link>
      </header>
      <Switch>
        <Route path="/edit">
          <EditPerson />
        </Route>
        <Route path="/">
          <People />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
