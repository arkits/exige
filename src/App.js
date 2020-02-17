import React from 'react';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import About from './components/About';
import ComposerView from './components/Composer/View';
import DashboardView from './components/Dashboard/View';

import { StoreProvider } from './store/ExigeStore';

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
                                <StoreProvider>
                                    <Switch>
                                        <Route path="/about">
                                            <About />
                                        </Route>
                                        <Route path="/dashboard">
                                            <DashboardView className="fh" />
                                        </Route>
                                        <Route path="/">
                                            <ComposerView className="fh" />
                                        </Route>
                                    </Switch>
                                </StoreProvider>
                            </div>
                        </div>
                    </Router>
                </Arwes>
            </ThemeProvider>
        </div>
    );
}

export default App;
