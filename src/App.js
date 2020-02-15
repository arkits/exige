import React from 'react'
import { ThemeProvider, createTheme, Arwes, Row } from 'arwes'
import AppBar from './components/AppBar'
import Map from './components/Map'

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={createTheme()}>
                <Arwes animate={false} show={false}>
                    <AppBar />
                    <Row>
                        <div style={{ padding: 20 }}>
                            <Map />
                        </div>
                    </Row>
                </Arwes>
            </ThemeProvider>
        </div>
    )
}

export default App
