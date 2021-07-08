import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetsGallery from "./pages/PetsGallery/PetsGallery";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pets" component={PetsGallery}></Route>
        <Route path="/about" component={About}></Route>

      </Switch>
    </Router>
  );
}

export default App;
