import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

const DataTable = observer(() => {
    const [showFlightDump, setShowFlightDump] = useState(false);

    const askariStore = useContext(AskariStoreContext);

    const positions = Object.values(askariStore.positions);

    const classes = useStyles();

    const RenderFlightData = () => {
        if (!showFlightDump) {
            return (
                <div>
                    {positions.map(position => {
                        return (
                            <>
                                <Card id={position.data.vid} key={position.data.vid}>
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom
                                        >
                                            {position.data.vid}
                                        </Typography>
                                        <Typography variant="body">
                                            latDeg={position.data.latDeg} <br />
                                            lonDeg={position.data.lonDeg} <br />
                                            latency=
                                            {new Date(
                                                position.metadata.brodcastTimestamp
                                            ).getTime() -
                                                new Date(
                                                    position.metadata.sourceTimestamp
                                                ).getTime()} ms
                                        </Typography>
                                    </CardContent>
                                </Card>{' '}
                                <br />
                            </>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <Card>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Flight Dump
                        </Typography>
                        <div style={{ display: 'flex', overflowY: 'scroll', height: '80vh' }}>
                            <pre>{JSON.stringify(positions, null, 2)}</pre>
                        </div>
                    </CardContent>
                </Card>
            );
        }
    };

    return (
        <div className="DataTable">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Number of Flights
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {positions.length}
                            </Typography>
                        </CardContent>
                    </Card>
                    <br />
                    <Card
                        style={{
                            backgroundColor: askariStore.sio.status === 'CONNECTED' ? 'green' : 'red'
                        }}
                    >
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Socket.IO Status
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {askariStore.sio.status}
                            </Typography>
                        </CardContent>
                    </Card>
                    <br />
                    <Card>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Options
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={showFlightDump}
                                        onChange={() => {
                                            setShowFlightDump(!showFlightDump);
                                        }}
                                        value="showFlightDump"
                                    />
                                }
                                label="Toggle Raw Data"
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <RenderFlightData />
                </Grid>
            </Grid>
        </div>
    );
});

export default DataTable;
