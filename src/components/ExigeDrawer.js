import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#212121'
    },
    title: {
        textDecoration: 'none',
        color: 'white',
        fontFamily: 'IBM Plex Mono',
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: '15px'
    },
    dividerTitle: {
        textTransform: 'uppercase',
        fontFamily: 'IBM Plex Mono',
        fontWeight: 'bold',
        color: '#bdbdbd'
    }
}));

function ExigeDrawer() {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
        >
            <Typography component={Link} to="/" variant="h4" className={classes.title}>
                ~/Exige
            </Typography>
            <Divider />
            <List>
                <ListItem>
                    <div className={classes.dividerTitle}>Views</div>
                </ListItem>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <Icon>map</Icon>
                    </ListItemIcon>
                    <ListItemText>Map</ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <div className={classes.dividerTitle}>Inspector</div>
                </ListItem>
                <ListItem button component={Link} to="/inspector">
                    <ListItemIcon>
                        <Icon>airplanemode_active</Icon>
                    </ListItemIcon>
                    <ListItemText>Traffic</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon>border_all</Icon>
                    </ListItemIcon>
                    <ListItemText>Network</ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <div className={classes.dividerTitle}>Cool Stuff</div>
                </ListItem>
                <ListItem button component={Link} to="/debug">
                    <ListItemIcon>
                        <Icon>settings</Icon>
                    </ListItemIcon>
                    <ListItemText>Debug</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/loader">
                    <ListItemIcon>
                        <Icon>add</Icon>
                    </ListItemIcon>
                    <ListItemText>Load Data</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon>
                        <Icon>sports_motorsports</Icon>
                    </ListItemIcon>
                    <ListItemText>About Exige</ListItemText>
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    );
}

export default ExigeDrawer;
