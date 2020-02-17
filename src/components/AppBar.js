import React from 'react';
import { Header, Heading, Row } from 'arwes';
import { Link } from 'react-router-dom';
import { Col } from 'arwes/lib/Grid';

function AppBar() {
    return (
        <div className="AppBar" style={{ padding: 20 }}>
            <Header animate>
                <Row style={{ margin: 0, display:'flex', alignItems:'stretch' }}>
                    <Col s={12} m={6} style={{ textAlign: 'left' }}>
                        <Heading node="h1">-/Exige</Heading>
                    </Col>
                    <Col s={12} m={6} style={{ textAlign: 'right' }}>
                        <Link className="navLink" to="/">
                            Composer
                        </Link>
                        <span style={{ padding: 20 }} />
                        <Link className="navLink" to="/dashboard">
                            Dashboard
                        </Link>
                        <span style={{ padding: 20 }} />
                        <Link className="navLink" to="/about">
                            About
                        </Link>
                    </Col>
                </Row>
            </Header>
        </div>
    );
}

export default AppBar;
