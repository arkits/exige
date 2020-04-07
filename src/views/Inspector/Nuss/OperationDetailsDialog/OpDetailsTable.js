import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function OpDetailsTable(operation) {
    let op = operation.operation;

    let op_vol_len = 0;

    try {
        op_vol_len = op.operation_volumes.length;
    } catch (error) {}

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="left">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right" component="th" scope="row">
                                GUFI
                            </TableCell>
                            <TableCell align="left">{op.gufi}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" component="th" scope="row">
                                State
                            </TableCell>
                            <TableCell align="left">{op.state}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" component="th" scope="row">
                                Priority OP
                            </TableCell>
                            <TableCell align="left">{JSON.stringify(op.priority_op)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" component="th" scope="row">
                                Number of Operation Volumes
                            </TableCell>
                            <TableCell align="left">{JSON.stringify(op_vol_len)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
        </div>
    );
}
