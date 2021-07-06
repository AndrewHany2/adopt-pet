import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetsGallery from "./pages/PetsGallery/PetsGallery";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pets" component={PetsGallery}></Route>
      </Switch>
    </Router>
  );
}

export default App;
