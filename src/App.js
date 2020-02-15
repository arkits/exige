import React from 'react';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
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
                                <Route path="/exige-react/composer">
                                    <Map />
                                </Route>
                                <Route path="/exige-react/visualizer">
                                    <Visualizer />
                                </Route>
                                <Route path="/">
                                    <Redirect to="/exige-react/composer" />
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
