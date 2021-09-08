import EditPerson from "./pages/Edit";
import People from "./pages/People";

function App({ name }) {
  return (
    <div className="App">
      <People />
      <EditPerson />
    </div>
  );
}

export default App;
