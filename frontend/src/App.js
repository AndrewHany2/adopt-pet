import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetsGallery from "./pages/PetsGallery/PetsGallery";
import PetsInfo from "./pages/PetsInfo/PetsInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pets/:id" component={PetsInfo}></Route>
        <Route path="/pets" component={PetsGallery}></Route>
      </Switch>
    </Router>
  );
}

export default App;
