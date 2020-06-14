import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from './pages/dashboard/Dashboard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    content: {
        flex: '1',
        height: '100vh',
        display: 'flex',
        paddingTop: theme.spacing(8),
    },
    mainContent: {
        height: '100%',
        width: '100%',
    },
}));

function Inspector() {
    return <h2>Inspector</h2>;
}

function App({ hideLoader }) {
    const classes = useStyles();

    useEffect(hideLoader, []);
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <AppBar />
                <main className={classes.content}>
                    <div className={classes.mainContent}>
                        <Switch>
                            <Route path="/inspector">
                                <Inspector />
                            </Route>
                            <Route path="/">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </Router>
        </div>
    );
}

export default App;
