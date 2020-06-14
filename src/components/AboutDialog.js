import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function AboutDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                style={{
                    backgroundColor: '#ff5722',
                    fontFamily: 'IBM Plex Mono',
                    color: 'white',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    textTransform: 'capitalize',
                }}
            >
                ~/Exige by ArKits
            </Button>
            <Dialog
                fullWidth
                maxWidth={'sm'}
                open={open}
                onClose={handleClose}
                aria-labelledby="about-exige-dialog"
            >
                <DialogTitle>
                    <Typography
                        variant="h5"
                        style={{
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}
                    >
                        About ~/Exige
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Exige is a proof-of-concept traffic visualizer for UAM / UTM data.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        style={{
                            color: 'white',
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
