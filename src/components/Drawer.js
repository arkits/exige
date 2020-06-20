import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
        width: 250,
    },
});

function TemporaryDrawer() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    return (
        <div>
            <React.Fragment>
                <IconButton
                    color="inherit"
                    aria-label="open-drawer"
                    onClick={toggleDrawer(true)}
                    edge="start"
                    style={{ color: '#ffffff' }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                    <div
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <div className={classes.drawer}></div>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                height: '100vh',
                                flexDirection: 'column',
                            }}
                        >
                            <div style={{ flexGrow: '1' }}>
                                <center>
                                    <Typography
                                        variant="h4"
                                        style={{
                                            fontFamily: 'IBM Plex Mono',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            marginTop: '20px',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        ~/Exige
                                    </Typography>
                                </center>
                                <Divider />
                                <List>
                                    <ListItem button component={RouterLink} to="/">
                                        <ListItemIcon>
                                            <DashboardRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'Dashboard'} />
                                    </ListItem>
                                    <ListItem button component={RouterLink} to="/inspector">
                                        <ListItemIcon>
                                            <TimelineRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'Inspector'} />
                                    </ListItem>
                                </List>
                                <Divider />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <center>
                                    <IconButton
                                        aria-label="exige-github-link"
                                        component="span"
                                        onClick={() => {
                                            var otherWindow = window.open();
                                            otherWindow.opener = null;
                                            otherWindow.location =
                                                'https://github.com/arkits/exige';
                                        }}
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                </center>
                            </div>
                        </div>
                    </div>{' '}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default TemporaryDrawer;
