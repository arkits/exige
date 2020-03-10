import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddDataButton = observer(() => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [loadData, setLoadData] = useState("");

    const askariStore = useContext(AskariStoreContext);

    const loadDataToStore = () => {
        console.log('We Loading');
        try {
            let inputData = JSON.parse(loadData);
            let gufi = inputData['gufi'];
            askariStore.operations[gufi] = inputData;
            setLoadData("");
        } catch (error) {
            console.error('Caught error when parsing inputData - ', error);
        }
    };

    return (
        <div>
            <Button
                variant="contained"
                style={{
                    marginLeft: '10px',
                    backgroundColor: '#2e7d32',
                    fontFamily: 'IBM Plex Mono',
                    color: 'white',
                    fontWeight: 'bold'
                }}
                onClick={handleClickOpen}
                endIcon={<Icon>add</Icon>}
            >
                Add Data
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                maxWidth="sm"
                fullWidth={true}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <div
                        style={{
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: 'bold',
                            fontStyle: 'italic'
                        }}
                    >
                        {'Add Data to Exige'}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="standard-multiline-static"
                        label="Load Data"
                        multiline
                        rows="10"
                        variant="outlined"
                        style={{ width: '100%' }}
                        onChange={data => setLoadData(data.target.value)}
                        value={loadData}
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ color: '#33b5e5' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default AddDataButton;
