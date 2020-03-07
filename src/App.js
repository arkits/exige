import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./styles/useStyles";
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import SioClient from './components/SocketIO/SioClient';
import Dashboard from './components/Dashboard/Dashboard';
import Inspector from './components/Inspector/Inspector';
import AskariSnackbar from './components/AskariSnackbar';
import ExigeDrawer from './components/ExigeDrawer';

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <SioClient />
            <Router basename={process.env.PUBLIC_URL}>
                <ExigeDrawer />
                <main className={classes.content}>
                    <Switch>
                        <Route path="/about">
                            <Container component="main" className={classes.main}>
                                <About />
                            </Container>
                        </Route>
                        <Route path="/inspector">
                            <Container component="main" className={classes.main}>
                                <Inspector />
                            </Container>
                        </Route>
                        <Route path="/">
                            <Dashboard />
                        </Route>
                    </Switch>
                </main>
            </Router>
            <AskariSnackbar />
        </div>
    );
}

export default App;
