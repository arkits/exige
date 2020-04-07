import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const DetailContents = (showRaw, operation) => {
    let op = showRaw.operation;

    let op_vol_len = 0;
    try {
        op_vol_len = op.operation_volumes.length;
    } catch (error) {}

    if (showRaw.showRaw) {
        return (
            <div
                style={{
                    textAlign: 'left',
                }}
            >
                <pre>{JSON.stringify(op, null, 4)}</pre>
            </div>
        );
    } else {
        return (
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
        );
    }
};

export default function OpDetailsTable(operation) {
    const [showRaw, setShowRaw] = useState(false);

    let op = operation.operation;

    return (
        <div>
            <center>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: '#1565c0',
                        fontFamily: 'IBM Plex Mono',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                    endIcon={<Icon>refresh</Icon>}
                    onClick={() => {
                        setShowRaw(!showRaw);
                    }}
                >
                    Toggle Raw
                </Button>
                <br /> <br />
                <DetailContents showRaw={showRaw} operation={op} />
            </center>
        </div>
    );
}
