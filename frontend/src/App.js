import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetsGallery from "./pages/PetsGallery/PetsGallery";
import About from "./pages/About/About";
import PetsInfo from "./pages/PetsInfo/PetsInfo";
import NavBar from "./components/NavBar/NavBar"
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/pets/:id" component={PetsInfo}></Route>
        <Route path="/pets" component={PetsGallery}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
