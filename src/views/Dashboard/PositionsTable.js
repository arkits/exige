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
        id: 'vid',
        label: 'vid',
        align: 'left',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'latDeg',
        label: 'latDeg',
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'lonDeg',
        label: 'lonDeg',
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

const PositionsTable = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const rows = Object.values(askariStore.positions);

    const classes = useStyles();

    return (
        <div
            className="PositionsTable"
            style={{
                paddingLeft: askariStore.drawerOpen ? '250px' : '80px',
            }}
        >
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
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.data.vid}
                                    >
                                        {columns.map((column) => {
                                            const value = row['data'][column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
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

export default PositionsTable;
