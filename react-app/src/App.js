import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/SplashPage/NavBar";
import HomePage from "./components/SplashPage/HomePage"
import ProtectedRoute from "./components/SplashPage/auth/ProtectedRoute";

import { authenticate } from "./services/auth";
import ListingsIdx from './components/houses/ListingsIdx'
import CreateHouseForm from './components/houses/CreateHouseForm'
import HouseProfilePage from './components/houses/HouseProfilePage'

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
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/" exact={true}>
          <HomePage></HomePage>
        </Route>
        <ProtectedRoute exact={true} path="/listings/create" authenticated={authenticated}>
          <CreateHouseForm user={authenticated} />
        </ProtectedRoute>
        <Route path='/listings/:id' exact={true}>
          <HouseProfilePage />
        </Route>
        <Route path="/listings">
          <ListingsIdx />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
