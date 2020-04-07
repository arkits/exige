import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';
import OpDetailsDialog from './OperationDetailsDialog/OpDetailsDialog';

const columns = [
    {
        id: 'gufi',
        label: 'GUFI',
        align: 'left',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'flight_number',
        label: 'Flight Number',
        align: 'left',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'state',
        label: 'State',
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'uss_name',
        label: 'USS Name',
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: '80vh',
    },
});

const NussOperationsTable = observer(({ operations }) => {
    const [open, setOpen] = useState(false);

    const [detailedOperation, setDetailedOperation] = useState({});

    const askariStore = useContext(AskariStoreContext);

    const handleClickOpen = (operation) => {
        setOpen(true);
        setDetailedOperation(operation);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loadOperationToMap = () => {
        console.log('Loading to Map', detailedOperation.gufi);
        askariStore.operations[detailedOperation.gufi] = detailedOperation;
        askariStore.snackbar.message = 'Drawing Operation on Map - ' + detailedOperation.gufi;
        askariStore.snackbar.isOpen = true;
    };

    const rows = operations;

    const classes = useStyles();

    return (
        <div className="NussOperationsTable">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.gufi}>
                                        {columns.map((column) => {
                                            let value = row[column.id];

                                            if (value == null) {
                                                value = 'exige.xyz';
                                            }

                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    onClick={() => {
                                                        handleClickOpen(row);
                                                    }}
                                                >
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth={'md'}
                onClose={handleClose}
            >
                <DialogTitle>
                    {'Operation Details - '} {detailedOperation.gufi}
                </DialogTitle>
                <DialogContent>
                    <OpDetailsDialog operation={detailedOperation} />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={loadOperationToMap}
                        variant="contained"
                        style={{
                            backgroundColor: '#e65100',
                            fontFamily: 'IBM Plex Mono',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        Draw on Map
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        style={{
                            backgroundColor: '#f50057',
                            fontFamily: 'IBM Plex Mono',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default NussOperationsTable;
