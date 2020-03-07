import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import OptionsList from './OptionsList';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function OptionsButton() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                style={{
                    backgroundColor: '#01579b',
                    fontFamily: 'IBM Plex Mono',
                    color: 'white',
                    fontWeight: 'bold'

                }}
                onClick={handleClickOpen}
                endIcon={<Icon>settings</Icon>}
            >
                Options
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
                        {'~/Exige Options'}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <OptionsList />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ color: '#33b5e5' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default OptionsButton;
