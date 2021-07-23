import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetsGallery from "./pages/PetsGallery/PetsGallery";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/editProfile/editProfile";
import PetsInfo from "./pages/PetsInfo/PetsInfo";
import AdoptionApp from "./pages/AdoptionApp/adoptionApp";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Messanger from "./pages/messenger/Messenger";

import ContactUs from "./pages/ContactUs/contactUs";


import DashboardPage from "./pages/Dashboard/Dashboard.js";
import TableList from "./pages/TableList/TableList.js";
import Typography from "./pages/Typography/Typography.js";

import SignOut from "./components/SignOut";
function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/pet/:id" component={PetsInfo}></Route>
        <Route exact path="/pets/:page" component={PetsGallery}></Route>
        <Route path="/addPet" component={AdoptionApp}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/edit/:id" component={EditProfile}></Route>
        <Route path="/contactus" component={ContactUs}></Route>
        <Route path="/signout" component={SignOut}></Route>
        <Route path="/messanger" component={Messanger}></Route>
        <Route path="/dashboard/home" component={DashboardPage}></Route>
        <Route path="/dashboard/table" component={TableList}></Route>
        <Route path="/dashboard/posts" component={Typography}></Route>
        <Route path="/signout" component={SignOut}></Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
