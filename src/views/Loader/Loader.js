import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Loader() {
    return (
        <Grid
            container
            spacing={3}
            style={{
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh'
            }}
        >
            <Grid item xs={10}>
                <Card style={{ maxHeight: '90vh' }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: 'IBM Plex Mono',
                                fontWeight: 'bold',
                                fontStyle: 'italic'
                            }}
                        >
                            Load Data into Exige
                        </Typography>{' '}
                        <br />
                        <Typography variant="body1">
                            Exige is a proof-of-concept traffic visualizer for UAM / UTM data.
                        </Typography>
                        <br />
                        <Typography variant="body1">Exige is built with: </Typography>
                        <ul>
                            <li>
                                <Typography variant="body1">React JS</Typography>
                            </li>
                            <li>
                                <Typography variant="body1">Material-UI</Typography>
                            </li>
                            <li>
                                <Typography variant="body1">Cesium</Typography>
                            </li>
                            <li>
                                <Typography variant="body1">Socket.IO</Typography>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Loader;
