import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import SignOut from "./components/SignOut";
import Home from "./pages/home";
import UserAdoptionRequests from "./pages/UserAdoptionRequests/UserAdoptionRequests";
import Posts from "./pages/Dashboard/posts";
import AdoptionRequests from "./pages/Dashboard/adoption-requests";
import Messages from "./pages/Dashboard/messages";
import SetAdmin from "./pages/Dashboard/set-admin";
import NotFound from "./pages/NotFound/NotFound";
import PendingRequests from "./pages/PendingRequests/PendingRequests";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/pet/:id" component={PetsInfo}></Route>
        <Route exact path="/pets/:page" component={PetsGallery}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="/addPet" component={AdoptionApp}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/edit/:id" component={EditProfile}></Route>
        <Route path="/contactus" component={ContactUs}></Route>
        <Route path="/signout" component={SignOut}></Route>
        <Route path="/messanger" component={Messanger}></Route>
        <Route path="/signout" component={SignOut}></Route>
        <Route path="/editprofile" component={EditProfile}></Route>
        <Route path="/pendingRequests" component={PendingRequests}></Route>

        <Route
          path="/useradotionrequests/:id"
          component={UserAdoptionRequests}
        ></Route>
        <Redirect exact path="/dashboard" to="/dashboard/posts" />
        <Route path="/dashboard/posts" component={Posts}></Route>
        <Route
          path="/dashboard/adoption-requests"
          component={AdoptionRequests}
        ></Route>
        <Route path="/dashboard/messages" component={Messages}></Route>
        <Route path="/dashboard/set-admin" component={SetAdmin}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
