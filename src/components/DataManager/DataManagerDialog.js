import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddDataForm from './AddDataForm';
import OperationsList from './OperationsList';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DataManager() {
    const [open, setOpen] = useState(false);

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                onClick={handleDialogOpen}
                style={{
                    marginLeft: '10px',
                    backgroundColor: '#2e7d32',
                    fontFamily: 'IBM Plex Mono',
                    color: 'white',
                    fontWeight: 'bold',
                }}
                endIcon={<Icon>add</Icon>}
            >
                Manage Data
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogClose}
                aria-label="manage-exige-data-dialog"
                maxWidth="md"
                fullWidth={true}
            >
                <DialogTitle>
                    <div
                        style={{
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}
                    >
                        {'Manage Exige Data'}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Paper
                        elevation={0}
                        style={{
                            backgroundColor: '#212121',
                        }}
                    >
                        <Tabs
                            centered
                            value={tabValue}
                            onChange={handleTabChange}
                            indicatorColor="primary"
                            aria-label="manage-exige-data-tabs"
                        >
                            <Tab label="List" {...a11yProps(0)} />
                            <Tab label="Add" {...a11yProps(1)} />
                        </Tabs>
                    </Paper>
                    <TabPanel value={tabValue} index={0}>
                        <OperationsList />
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <AddDataForm />
                    </TabPanel>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DataManager;
