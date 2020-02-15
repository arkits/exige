import React from 'react';
import { Header, Heading, Row, Link } from 'arwes';
import { Col } from 'arwes/lib/Grid';

function AppBar() {
    return (
        <div className="AppBar">
            <Header animate>
                <Row style={{ margin: 0 }}>
                    <Col s={9}>
                        <Heading node="h1">-/Exige</Heading>
                    </Col>
                    <Col s={3} style={{ textAlign: 'right' }}>
                        <Link href="/exige-react/composer">Composer</Link>
                        <span style={{ padding: 20 }} />
                        <Link href="/exige-react/visualizer">Visualizer</Link>
                    </Col>
                </Row>
            </Header>
        </div>
    );
}

export default AppBar;
