import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { ExigeStoreContext } from '../../store/ExigeStore';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Icon,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@material-ui/core';
import { Color } from 'cesium';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import uuid from 'uuid-random';

function operationModelParser(operation) {
    let parsedOperation = {};

    let gufi = operation?.operation?.reference?.id;
    if (!gufi) {
        gufi = uuid();
    }

    let owner = operation?.operation?.reference?.owner;
    if (owner) {
        owner = owner.toLowerCase();
    } else {
        owner = 'exige.xyz';
    }

    let state = operation?.operation?.details?.state;
    if (state) {
        state = state.toUpperCase();
    } else {
        state = 'UNKNOWN';
    }

    let volumes = operation?.operation?.details?.volumes;

    parsedOperation['gufi'] = gufi;
    parsedOperation['owner'] = owner;
    parsedOperation['state'] = state;
    parsedOperation['volumes'] = volumes;

    // Exige Option
    parsedOperation['exige'] = {
        hidden: false,
        color: Color.BLUE.withAlpha(0.5),
    };

    return parsedOperation;
}

function FormFeedback({ formResponse }) {
    if (formResponse.show) {
        let background = '#aa2e25';
        if (formResponse.type === 'success') {
            background = '#357a38';
        }
        return (
            <React.Fragment>
                <Card style={{ background: background }}>
                    <CardContent>{formResponse.message}</CardContent>
                </Card>
            </React.Fragment>
        );
    } else {
        return null;
    }
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddDataForm = observer(() => {
    const classes = useStyles();

    const [loadData, setLoadData] = useState('');

    const exigeStore = useContext(ExigeStoreContext);

    const [dataModelType, setDataModelType] = useState('operation-v4');
    const handleDataModelChange = (event) => {
        setDataModelType(event.target.value);
    };

    const [formResponse, setFormResponse] = useState({
        show: false,
        type: null,
        message: null,
    });

    const loadDataToStore = () => {
        console.log('Adding Operation to ExigeStore...');

        try {
            let inputData = JSON.parse(loadData);
            if (Array.isArray(inputData)) {
                inputData.forEach((operation) => {
                    let parsedOperation = operationModelParser(operation);
                    let gufi = parsedOperation['gufi'];
                    exigeStore.operations[gufi] = parsedOperation;
                });
            } else {
                let operation = operationModelParser(inputData);
                let gufi = operation['gufi'];
                exigeStore.operations[gufi] = operation;
            }
            setFormResponse({
                show: true,
                type: 'success',
                message: 'Added Operation successfully!',
            });
        } catch (error) {
            console.error('Caught error when parsing inputData - ', error);
            setFormResponse({
                show: true,
                type: 'fail',
                message: 'Caught error when parsing - ' + error.message,
            });
        } finally {
            setLoadData('');
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h6">Add Data to Exige</Typography> <br></br>
            <center>
                <FormControl className={classes.formControl}>
                    <InputLabel id="data-model-label">Data Model Type</InputLabel>
                    <Select
                        labelId="data-model-select-label"
                        id="data-model-select"
                        value={dataModelType}
                        onChange={handleDataModelChange}
                    >
                        <MenuItem value={'operation-v4'}>Operation - NASA v4</MenuItem>
                        <MenuItem value={'operation-astm-035'}>Operation - ASTM 0.3.5</MenuItem>
                        <MenuItem value={'operation-astm-037'}>Operation - ASTM 0.3.7</MenuItem>
                        <MenuItem value={'position-v4'}>Position - NASA v4</MenuItem>
                        <MenuItem value={'position-astm-035'}>Position - ASTM 0.3.5</MenuItem>
                    </Select>
                </FormControl>
            </center>
            <br />
            <TextField
                label="Load Data"
                multiline
                rows="10"
                variant="outlined"
                style={{ width: '100%' }}
                onChange={(data) => setLoadData(data.target.value)}
                value={loadData}
            />
            <center>
                <br />
                <FormFeedback formResponse={formResponse} />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<Icon>add</Icon>}
                    onClick={loadDataToStore}
                >
                    Add Data
                </Button>
            </center>
        </React.Fragment>
    );
});

export default AddDataForm;
