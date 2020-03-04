import React, { useContext } from "react";
import { observer } from "mobx-react";
import { AskariStoreContext } from "../../store/AskariStore";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const DataTable = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const positions = Object.values(askariStore.positions);

    const classes = useStyles();

    return (
        <div className="DataTable">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Number of Flights
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {positions.length}
                            </Typography>
                        </CardContent>
                    </Card> <br />
                    <Card style={{ backgroundColor: askariStore.sioStatus === 'CONNECTED' ? 'green' : 'red', }}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Socket.IO Status
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {askariStore.sioStatus}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card >
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Flight Dump
                            </Typography>
                            <div style={{ display: "flex", overflowY: "scroll", height: "80vh" }}>
                                <pre >{JSON.stringify(positions, null, 2)}</pre>
                            </div>
                        </CardContent></Card>
                </Grid>
            </Grid>

        </div>
    );
});

export default DataTable;
