import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { ExigeStoreContext } from '../../store/ExigeStore';
import { TextField, Icon, Typography } from '@material-ui/core';
import { Color } from 'cesium';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function operationModelParser(operation) {
    let parsedOperation = {};

    let gufi = operation?.reference?.id;

    let owner = operation?.reference?.owner;
    owner = owner.toLowerCase();

    let state = operation?.details?.state;
    state = state.toUpperCase();

    let volumes = operation?.details?.volumes;

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

const AddDataForm = observer(() => {
    const [loadData, setLoadData] = useState('');

    const exigeStore = useContext(ExigeStoreContext);

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
