import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Foooter/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import NotFound from './Pages/NotFound/NotFound';
import PrivateService from './Pages/PrivateService/PrivateService';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Helpline from './Pages/Helpline/Helpline';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/service">
              <PrivateService></PrivateService>
            </PrivateRoute>
            <PrivateRoute exact path="/about">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route exact path="/help">
              <Helpline></Helpline>
            </Route>
            <Route  path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
