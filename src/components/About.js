import React from 'react';
import { Frame, Button, Content } from 'arwes';

function About() {
    return (
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop:'50px' }}>
            <Frame animate level={1} corners={3}>
                <Content style={{ margin: 20 }}>
                    <h1>About Exige</h1>

                    <p>Exige is a proof-of-concept traffic visualizer for UAM / UTM data.</p>

                    <h4>Exige is built with: </h4>

                    <ul>
                        <li>react</li>
                        <li>react-map-gl</li>
                        <li>arwes</li>
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
                </Content>
            </Frame>
        </div>
    );
}

export default About;
