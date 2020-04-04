import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SetOperatorCreds = ({ setCreds }) => {
    const [open, setOpen] = useState(false);

    const [p_user, setUsername] = React.useState('');
    const [p_pass, setPassword] = React.useState('');
    const [p_url, setUrl] = React.useState('http://localhost:8786');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!p_user || !p_pass || !p_url) return;

        setCreds({
            exige_username: p_user,
            exige_password: p_pass,
            exige_uss_url: p_url,
        });

        handleClose();
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
                    fontWeight: 'bold',
                }}
                onClick={handleClickOpen}
                endIcon={<Icon>sentiment_satisfied_alt</Icon>}
            >
                Set Operator Credentials
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                maxWidth="xs"
                fullWidth={true}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <div
                        style={{
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}
                    >
                        {'Set Operator Credentials'}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            fullWidth
                            value={p_user}
                            className="input"
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            variant="outlined"
                            margin="dense"
                            id="password"
                            label="Password"
                            className="input"
                            type="password"
                            fullWidth
                            value={p_pass}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <TextField
                            variant="outlined"
                            margin="dense"
                            id="url"
                            label="USS URL"
                            className="input"
                            type="text"
                            fullWidth
                            value={p_url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </form>
                    <br />

                    <div style={{ display: 'flex' }}>
                        <div style={{ flexGrow: '1' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </div>

                        <Button variant="contained" size="large" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SetOperatorCreds;
