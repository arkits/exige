import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const Loader = observer(() => {
    const [loadData, setLoadData] = useState(null);

    const askariStore = useContext(AskariStoreContext);

    const loadDataToStore = () => {
        console.log('We Loading');
        try {
            let inputData = JSON.parse(loadData);
            let gufi = inputData['gufi'];
            askariStore.operations[gufi] = inputData;
        } catch (error) {
            console.error('Caught error when parsing inputData - ', error);
        }
    };

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
                        <TextField
                            id="standard-multiline-static"
                            label="Load Data"
                            multiline
                            rows="10"
                            variant="outlined"
                            style={{ width: '100%' }}
                            onChange={data => setLoadData(data.target.value)}
                        />
                        <center>
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<Icon>send</Icon>}
                                onClick={loadDataToStore}
                            >
                                Load Operation
                            </Button>
                        </center>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
});

export default Loader;
