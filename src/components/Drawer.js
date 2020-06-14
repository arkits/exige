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
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
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
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                    edge="start"
                    style={{ color: 'white' }}
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
                                <List>
                                    <ListItem button component={RouterLink} to="/about">
                                        <ListItemIcon>
                                            <InfoRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'About Exige'} />
                                    </ListItem>
                                </List>
                                <Divider />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <center>
                                    <a target="_blank" href="https://github.com/arkits/exige">
                                        <IconButton
                                            color="white"
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <GitHubIcon />
                                        </IconButton>
                                    </a>
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
