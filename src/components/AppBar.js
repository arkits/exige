import React from 'react';
import { Header, Heading, Button, Row } from 'arwes';
import { Col } from 'arwes/lib/Grid';

function AppBar() {
    return (
        <div className="AppBar" style={{ padding: 20 }}>
            <Header>
                <Row style={{ padding: 0, margin: 0 }}>
                    <Col s={9}>
                        <Heading node="h1">-/Exige</Heading>
                    </Col>
                    <Col s={3} style={{ textAlign: 'right' }}>
                        <Button animate>Composer</Button>
                        <span style={{ padding: 10 }} />
                        <Button animate>Visualizer</Button>
                    </Col>
                </Row>
            </Header>
        </div>
    );
}

export default AppBar;
