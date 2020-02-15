import React from 'react';
import { ThemeProvider, createTheme, Arwes, Header, Row, Col, Heading, Link } from 'arwes';
import Map from './components/Map/Map';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';

function Visualizer() {
    return <h2>Visualizer</h2>;
}

function App() {
    return (
        <div className="App">
            <Router>
                <ThemeProvider theme={createTheme()}>
                    <Arwes animate>
                        <div style={{ padding: 20 }}>
                            <AppBar/>
                            <br />
                            <Switch>
                                <Route path="/composer">
                                    <Map />
                                </Route>
                                <Route path="/visualizer">
                                    <Visualizer />
                                </Route>
                                <Route path="/">
                                    <Redirect to="/composer" />
                                </Route>
                            </Switch>
                        </div>
                    </Arwes>
                </ThemeProvider>
            </Router>
        </div>
    );
}

export default App;
