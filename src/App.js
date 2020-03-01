import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./styles/useStyles";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SioClient from "./components/SocketIO/SioClient";
import Dashboard from "./components/Dashboard/Dashboard";
import AskariSnackbar from "./components/AskariSnackbar";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SioClient />
      <CssBaseline />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <Container component="main" className={classes.main}>
              <About />
            </Container>
          </Route>
          <Route path="/">
          <Dashboard />
          </Route>
        </Switch>
      </Router>
      <AskariSnackbar />
    </div>
  );
}

export default App;
