import React from 'react';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import Map from './components/Map/Map';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';

function About() {
    return <h2>About</h2>;
}

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={createTheme()}>
                <Arwes animate>
                    <Router basename={process.env.PUBLIC_URL}>
                        <div class="box">
                            <div class="row">
                                <AppBar />
                            </div>
                            <div class="row content">
                                <Switch>
                                    <Route path="/about">
                                        <About />
                                    </Route>
                                    <Route path="/">
                                        <Map className="fh" />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </Arwes>
            </ThemeProvider>
        </div>
    );
}

export default App;
