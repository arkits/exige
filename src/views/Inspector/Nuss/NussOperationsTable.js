import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    {
        id: 'gufi',
        label: 'GUFI',
        align: 'left',
        format: value => value.toLocaleString()
    },
    {
        id: 'state',
        label: 'State',
        align: 'right',
        format: value => value.toLocaleString()
    },
    {
        id: 'uss_name',
        label: 'USS Name',
        align: 'right',
        format: value => value.toLocaleString()
    }
];

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    container: {
        maxHeight: '80vh'
    }
});

const NussOperationsTable = (({operations}) => {

    const rows = operations;

    const classes = useStyles();

    return (
        <div className="NussOperationsTable">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
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
                            {rows.map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.gufi}>
                                        {columns.map(column => {
                                            
                                            let value = row[column.id];

                                            if(value == null){
                                                value = 'exige.xyz';
                                            }

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

export default NussOperationsTable;
