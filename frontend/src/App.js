import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetsGallery from "./pages/PetsGallery/PetsGallery";
import PetsInfo from "./pages/PetsInfo/PetsInfo";
import AdoptionApp from "./pages/AdoptionApp/adoptionApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pets/:id" component={PetsInfo}></Route>
        <Route path="/pets" component={PetsGallery}></Route>
        <Route path="/Adoption" component={AdoptionApp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
