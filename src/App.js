import { useState, useEffect } from "react";
import EditPerson from "./pages/Edit";
import People from "./pages/People";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [peopleList, setPeopleList] = useState([]);
  useEffect(() => {
    const getPeopleList = async () => {
      setLoading(true);
      if (peopleList)
        try {
          const { people } = await fetch(
            "http://localhost:5050/api/people"
          ).then((response) => response.json());
          setPeopleList(people);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
          setError(error);
        }
    };
    getPeopleList();
  }, []);

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
          <People {...{ peopleList, error, loading }} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
