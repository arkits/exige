import React, { useState, useEffect } from 'react';
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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

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

const NussOperationsTable = ({ operations }) => {
    const [open, setOpen] = useState(false);

    const [detailedOperation, setDetailedOperation] = useState({});

    const handleClickOpen = (operation) => {
        setOpen(true);
        setDetailedOperation(operation);
    };

    const handleClose = () => {
        setOpen(false);
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
                <DialogTitle>{'Operation Details'}</DialogTitle>
                <DialogContent>
                    <pre>{JSON.stringify(detailedOperation, null, 4)}</pre>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default NussOperationsTable;
