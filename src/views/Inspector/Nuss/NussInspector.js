import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import NussOperationsTable from './NussOperationsTable';
import SetOperatorCreds from './SetOperatorCreds';
import { useLocalStorage } from '../../../utils/storage';

const NussInspector = () => {
    const [loadedOperations, setLoadedOperations] = useState([]);

    const [creds, setCreds] = useLocalStorage('creds', {
        exige_username: '',
        exige_password: '',
        exige_uss_url: ''
    });

    useEffect(() => {
        axios({
            method: 'GET',
            url: creds.exige_uss_url + '/operations',
            headers: {
                'Acces-Control-Allow-Origin': '*',
                Authorization: 'Basic ' + btoa(creds.exige_username + ':' + creds.exige_password)
            }
        }).then(res => {
            console.log('Loaded!');
            setLoadedOperations(res.data);
        });
    }, []);

    if (creds.username !== '') {
        return (
            <div className="NussInspector" style={{ paddingTop: '30px', paddingLeft: '50px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flexGrow: '1' }}>
                        <Typography
                            variant="h4"
                            style={{
                                fontFamily: 'IBM Plex Mono',
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}
                        >
                            Operations
                        </Typography>
                    </div>

                    <div>
                        <SetOperatorCreds setCreds={setCreds} />
                    </div>
                </div>

                <br />
                <br />

                <NussOperationsTable operations={loadedOperations} />
            </div>
        );
    } else {
        return (
            <div className="NussInspector" style={{ paddingTop: '30px', paddingLeft: '50px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flexGrow: '1' }}>
                        <Typography
                            variant="h4"
                            style={{
                                fontFamily: 'IBM Plex Mono',
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}
                        >
                            Operations
                        </Typography>
                    </div>

                    <div>
                        <SetOperatorCreds setCreds={setCreds} />
                    </div>
                </div>{' '}
                <br />
                <br />
                <br />
                <br />
                <center>
                    <Typography variant="h2" style={{ fontFamily: 'IBM Plex Mono' }}>
                        Please Login
                    </Typography>
                </center>
            </div>
        );
    }
};

export default NussInspector;
