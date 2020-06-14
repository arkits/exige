import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { ExigeStoreContext } from '../../store/ExigeStore';
import { TextField, Icon, Typography } from '@material-ui/core';
import { Color } from 'cesium';

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

const AddDataForm = observer(() => {
    const [loadData, setLoadData] = useState('');

    const exigeStore = useContext(ExigeStoreContext);

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

            setLoadData('');
        } catch (error) {
            console.error('Caught error when parsing inputData - ', error);
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h6">Add Data to Exige</Typography> <br></br>
            <TextField
                id="standard-multiline-static"
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
