import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import NussOperationsTable from './NussOperationsTable';

const NussInspector = () => {
    const [loadedOperations, setLoadedOperations] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8786/nuss/operator/operations',
            headers: {
                'Acces-Control-Allow-Origin': '*',
                Authorization: 'Basic =='
            }
        }).then(res => {
            console.log('loaded');
            setLoadedOperations(res.data);
        });
    }, []);

    return (
        <div className="NussInspector" style={{ paddingTop: '30px', paddingLeft: '50px' }}>
            <Typography
                variant="h4"
                style={{ fontFamily: 'IBM Plex Mono', fontStyle: 'italic', fontWeight: 'bold' }}
            >
                Operations
            </Typography>

            <br />
            <br />

            <NussOperationsTable operations={loadedOperations} />
        </div>
    );
};

export default NussInspector;
