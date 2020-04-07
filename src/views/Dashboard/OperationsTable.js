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

const columns = [
    {
        id: 'gufi',
        label: 'gufi',
        align: 'left',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'state',
        label: 'state',
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'uss_name',
        label: 'uss_name',
        align: 'right',
        format: (value) => value.toLocaleString(),
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
                                                        handleClickOpen(row.operation_volumes);
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
        </div>
    );
});

export default OperationsTable;
