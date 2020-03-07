import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../store/AskariStore';

const StoreDump = observer(() => {
    const askariStore = useContext(AskariStoreContext);
    return (
        <div style={{ display: "flex", overflowY: "scroll", height: "78vh"}}>
            <pre >{JSON.stringify(askariStore, null, 2)}</pre>
        </div>
    );
});

function About() {
    return (
        <Grid container spacing={3} style={{paddingTop:"30px"}}>
            <Grid item xs={12} sm={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">About</Typography>
                        <br />
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            <br />
                            <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card style={{ maxHeight: '87vh' }}>
                    <CardContent>
                        <Typography variant="h5">Store Dump</Typography>
                        <br />
                        <StoreDump />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default About;
