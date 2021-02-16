import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import MovieDetails from "./components/pages/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/">OMDb</Link>
      </header>
      <main className="mainContent">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/m/:imdbID" exact>
            <MovieDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
