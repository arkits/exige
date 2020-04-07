import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const columns = [
    {
        id: 'gufi',
        label: 'GUFI',
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
    {
        id: 'actions',
        label: 'Actions',
        align: 'center',
    },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: '80vh',
    },
});

const OperationsTable = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const rows = Object.values(askariStore.operations);

    const classes = useStyles();

    const handleClickOpen = (op_vols) => {
        askariStore.map.cameraCenter.latitude = op_vols[0].flight_geography.coordinates[0][0][1];
        askariStore.map.cameraCenter.longitude = op_vols[0].flight_geography.coordinates[0][0][0];
        console.log(
            'Updated camera - ',
            askariStore.map.cameraCenter.latitude,
            askariStore.map.cameraCenter.longitude
        );
    };

    return (
        <div className="OperationsTable">
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
                                        <TableCell align="left">{row.gufi}</TableCell>
                                        <TableCell align="right">{row.state}</TableCell>
                                        <TableCell align="right">exige.xyz</TableCell>
                                        <TableCell align="right">
                                            <Button
                                                size="small"
                                                variant="contained"
                                                style={{
                                                    backgroundColor: '#1565c0',
                                                    fontFamily: 'IBM Plex Mono',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    marginRight: '10px',
                                                }}
                                                endIcon={<Icon>remove_red_eye</Icon>}
                                                onClick={() => {
                                                    handleClickOpen(row.operation_volumes);
                                                }}
                                            >
                                                View
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                style={{
                                                    backgroundColor: '#c2185b',
                                                    fontFamily: 'IBM Plex Mono',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                }}
                                                onClick={() => {
                                                    handleClickOpen(row.operation_volumes);
                                                }}
                                            >
                                                Hide
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
});

export default OperationsTable;
