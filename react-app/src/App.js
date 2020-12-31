import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./components/SplashPage/NavBar";
import HomePage from "./components/SplashPage/HomePage"
import ProtectedRoute from "./components/SplashPage/auth/ProtectedRoute";

import { authenticate } from "./services/auth";
import ListingsIdx from './components/houses/ListingsIdx'
import CreateHouseForm from './components/houses/CreateHouseForm'
import HouseProfilePage from './components/houses/HouseProfilePage'
import GhostRating from "./components/houses/GhostRating";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(user);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} /> */}
      <Switch>
        <Route path="/test">
          <GhostRating />
        </Route>
        <Route path="/listings/create" exact={true}>
          <CreateHouseForm />
        </Route>
        <Route path='/listings/:id' exact={true}>
          <HouseProfilePage />
        </Route>
        <Route path="/listings">
          <ListingsIdx />
        </Route>
        <Route path="/">
          <Redirect to="/listings" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
