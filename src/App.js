import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile } from "./views";
import ProtectedRoute from "./auth/protected-route";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./app.css";
import Orders from "./views/Orders";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/orders" component={Orders} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
