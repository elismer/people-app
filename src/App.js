import EditPerson from "./pages/Edit";
import People from "./pages/People";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import usePeopleList from "./hooks/usePeopleList";
function App() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [peopleList, setPeopleList] = useState([]);
  // useEffect(() => {
  //   const getPeopleList = async () => {
  //     setLoading(true);
  //     if (peopleList)
  //       try {
  //         const { people } = await fetch(
  //           "http://localhost:5050/api/people"
  //         ).then((response) => response.json());
  //         setPeopleList(people);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error(error);
  //         setLoading(false);
  //         setError(error);
  //       }
  //   };
  //   getPeopleList();
  // }, []);

  const { isLoading, error, data } = usePeopleList();
  return (
    <Router>
      <Header />
      <div style={{ marginTop: "75px" }}>
        <Switch>
          <Route path="/edit">
            <EditPerson />
          </Route>
          <Route path="/">
            <People {...{ peopleList: data, error, loading: isLoading }} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
