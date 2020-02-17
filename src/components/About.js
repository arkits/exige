import React from 'react';
import { Frame, Button, Content, Row, Col } from 'arwes';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../store/ExigeStore';

function About() {
    const DumpExigeStore = () => {
        const store = React.useContext(StoreContext);

        return useObserver(() => (
            <pre style={{ fontSize: '12px' }}>{JSON.stringify(store, null, 2)}</pre>
        ));
    };

    return (
        <div>
            <Row nested noMargin>
                <Col s={7}>
                    <Frame animate level={1} corners={3}>
                        <Content style={{ margin: 20 }}>
                            <h1>About Exige</h1>

                            <p>
                                Exige is a proof-of-concept traffic visualizer for UAM / UTM data.
                            </p>

                            <h2>Exige is built with: </h2>

                            <ul>
                                <li>react</li>
                                <li>react-map-gl</li>
                                <li>arwes</li>
                                <li>mobx</li>
                                <li>axios</li>
                                <li>node-sass</li>
                            </ul>

                            <center>
                                <a
                                    href="https://github.com/arkits/exige-react/"
                                    target="_blank"
                                    without
                                    rel="noopener noreferrer"
                                >
                                    <Button animate>View on GitHub</Button>
                                </a>
                            </center>

                            <br></br>
                        </Content>
                    </Frame>
                </Col>
                <Col s={5}>
                    <Frame animate level={1} corners={3}>
                        <Content style={{ margin: 20 }}>
                            <h1>Store Dump</h1>
                            <DumpExigeStore />
                        </Content>
                    </Frame>
                </Col>
            </Row>
        </div>
    );
}

export default About;
