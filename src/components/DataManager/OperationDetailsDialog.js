import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function OperationDetailsDialog({ open, handleClose, detailsData }) {
    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
                aria-labelledby="about-exige-dialog"
            >
                <DialogTitle>
                    <Typography
                        style={{
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            fontSize: '22px',
                        }}
                    >
                        Operation Details
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <pre>{JSON.stringify(detailsData, null, 4)}</pre>
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
