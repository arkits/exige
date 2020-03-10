import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles/useStyles';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Debug from './views/CoolStuff/Debug';
import About from './views/CoolStuff/About';
import SioClient from './components/SocketIO/SioClient';
import Dashboard from './views/Dashboard/Dashboard';
import Inspector from './views/Inspector/Inspector';
import AskariSnackbar from './components/AskariSnackbar';
import ExigeDrawer from './components/ExigeDrawer';
import NetworkInspector from './views/Inspector/NetworkInspectortor';

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
                        <Route path="/debug">
                            <Container component="main" className={classes.main}>
                                <Debug />
                            </Container>
                        </Route>
                        <Route path="/about">
                            <Container component="main" className={classes.main}>
                                <About />
                            </Container>
                        </Route>
                        <Route path="/inspector/traffic">
                            <Container component="main" className={classes.main}>
                                <Inspector />
                            </Container>
                        </Route>
                        <Route path="/inspector/network">
                            <Container component="main" className={classes.main}>
                                <NetworkInspector />
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
