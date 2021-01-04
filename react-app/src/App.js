import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./components/SplashPage/NavBar";
import HomePage from "./components/SplashPage/HomePage"
import ProtectedRoute from "./components/SplashPage/auth/ProtectedRoute";

import { authenticate } from "./services/auth";
import ListingsIdx from './components/houses/ListingsIdx'
import CreateHouseForm from './components/houses/CreateHouseForm'
import HouseProfilePage from './components/houses/HouseProfilePage'


export const context = createContext(false)


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
    <context.Provider value={authenticated}>
      <BrowserRouter>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <Switch>
          <Route path="/" exact={true}>
            <Redirect to="/listings" />
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
    </context.Provider>
  );
}


export default App;
