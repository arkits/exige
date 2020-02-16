import React from 'react';
import { Header, Heading, Row } from 'arwes';
import { Link } from 'react-router-dom';
import { Col } from 'arwes/lib/Grid';
import '../styles/NavBar.css';

function AppBar() {
    return (
        <div className="AppBar">
            <Header animate>
                <Row style={{ margin: 0 }}>
                    <Col s={9}>
                        <Heading node="h1">-/Exige</Heading>
                    </Col>
                    <Col s={3} style={{ textAlign: 'right' }}>
                        <Link className="navLink" to="/">Home</Link>
                        <span style={{ padding: 20 }} />
                        <Link className="navLink" to="/about">About</Link>
                    </Col>
                </Row>
            </Header>
        </div>
    );
}

export default AppBar;
