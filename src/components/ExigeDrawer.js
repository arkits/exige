import React, { useContext } from 'react';
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
import clsx from 'clsx';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../store/AskariStore';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    title: {
        textDecoration: 'none',
        color: 'white',
        fontFamily: 'IBM Plex Mono',
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: '15px',
    },
    dividerTitle: {
        textTransform: 'uppercase',
        fontFamily: 'IBM Plex Mono',
        fontWeight: 'bold',
        color: '#bdbdbd',
    },
}));

const ExigeDrawer = observer(() => {
    const classes = useStyles();

    const askariStore = useContext(AskariStoreContext);

    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
        askariStore.drawerOpen = !open;
    };

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <Typography component={Link} to="/" variant="h4" className={classes.title}>
                {open ? '~/Exige' : '~'}
            </Typography>
            <Divider />
            <List>
                <ListItem>
                    <div className={classes.dividerTitle}> {open ? 'Views' : ''}</div>
                </ListItem>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <Icon>public</Icon>
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <div className={classes.dividerTitle}>{open ? 'Inspector' : ''}</div>
                </ListItem>
                <ListItem button component={Link} to="/inspector/traffic">
                    <ListItemIcon>
                        <Icon>airplanemode_active</Icon>
                    </ListItemIcon>
                    <ListItemText>Traffic</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/inspector/nuss">
                    <ListItemIcon>
                        <Icon>border_all</Icon>
                    </ListItemIcon>
                    <ListItemText>NUSS</ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <div className={classes.dividerTitle}>{open ? 'Cool Stuff' : ''}</div>
                </ListItem>
                <ListItem button component={Link} to="/debug">
                    <ListItemIcon>
                        <Icon>settings</Icon>
                    </ListItemIcon>
                    <ListItemText>Debug</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon>
                        <Icon>sports_motorsports</Icon>
                    </ListItemIcon>
                    <ListItemText>About Exige</ListItemText>
                </ListItem>
            </List>
            <Divider />
            <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                    <Icon>{open ? 'chevron_left' : 'chevron_right'}</Icon>
                </ListItemIcon>
                <ListItemText>Toggle Drawer</ListItemText>
            </ListItem>
        </Drawer>
    );
});

export default ExigeDrawer;
