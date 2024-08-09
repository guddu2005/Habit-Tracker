
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddHabit from './components/AddHabit';
import Weekly from './components/Weekly'; 
import Footer from './components/Footer';
import Login from "./components/Login"
import SignupPage from './components/Setting';
import ProfilePage from './components/Profilepage';

function App() {
  return (
    <Router className="bg-stone-600">
      <NavBar />
      <Switch>
        <Route exact path="/" component={AddHabit} />
        <Route path="/Weekly" component={Weekly} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={SignupPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
