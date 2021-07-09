import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetsGallery from "./pages/PetsGallery/PetsGallery";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pets" component={PetsGallery}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile/:id" component={Profile}></Route>

      </Switch>
      <Footer/>

    </Router>

  );
}

export default App;
