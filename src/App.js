import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route path="/add" component={() => <AddContact />} />

        <Route exact path="/edit/:id" component={() => <EditContact />} />
      </Switch>
    </div>
  );
}

export default App;
