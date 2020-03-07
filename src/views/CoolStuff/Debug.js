import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const StoreDump = observer(() => {
    const askariStore = useContext(AskariStoreContext);
    return (
        <div style={{ display: "flex", overflowY: "scroll", height: "80vh"}}>
            <pre >{JSON.stringify(askariStore, null, 2)}</pre>
        </div>
    );
});

function Debug() {
    return (
        <Grid container spacing={3} style={{padding:"30px"}}>
            <Grid item xs={12}>
                <Card style={{ maxHeight: '90vh' }}>
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

export default Debug;
