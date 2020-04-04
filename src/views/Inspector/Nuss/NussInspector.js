import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import NussOperationsTable from './NussOperationsTable';
import SetOperatorCreds from './SetOperatorCreds';
import ApiErrorCard from './ApiErrorCard';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { useLocalStorage } from '../../../utils/storage';

const NussInspector = () => {
    const [loadedOperations, setLoadedOperations] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [creds, setCreds] = useLocalStorage('creds', {
        exige_username: '',
        exige_password: '',
        exige_uss_url: '',
    });

    const [offset, setOffset] = useState(0);

    const [error, setError] = useState(null);

    const refreshOperations = (clearOptions) => {
        let operations = loadedOperations;
        let off = offset;
        if (clearOptions) {
            console.log('Clearing previous Operations');
            operations = [];
            off = 0;
        }
        setIsLoading(true);
        let url = creds.exige_uss_url + '/nuss/operator/operations' + '/?offset=' + off;
        axios({
            method: 'GET',
            url: url,
            headers: {
                'Acces-Control-Allow-Origin': '*',
                Authorization: 'Basic ' + btoa(creds.exige_username + ':' + creds.exige_password),
            },
        })
            .then((res) => {
                setIsLoading(false);
                console.log('Loaded Operations - ', res.data.length);
                if (off > 0) {
                    setLoadedOperations(operations.concat(res.data));
                } else {
                    setLoadedOperations(res.data);
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log('Caught Error when getting Operations!', err);
                let error = {
                    message: err.message,
                    status: err.request.status,
                };
                setError(error);
            });
    };

    useEffect(() => {
        refreshOperations(false);
    }, [creds.exige_username, creds.exige_password, creds.exige_uss_url, offset]);

    if (creds.exige_username !== '') {
        return (
            <div className="NussInspector" style={{ paddingTop: '30px', paddingLeft: '50px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flexGrow: '1' }}>
                        <Typography
                            variant="h4"
                            style={{
                                fontFamily: 'IBM Plex Mono',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                            }}
                        >
                            NUSS > Operations
                        </Typography>
                    </div>

                    <div></div>
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
                            refreshOperations(true);
                        }}
                    >
                        Refresh
                    </Button>
                    <div>
                        <SetOperatorCreds setCreds={setCreds} />
                    </div>
                </div>
                <br />
                {isLoading === true ? (
                    <div className="isNussLoading">
                        <LinearProgress color="secondary" />
                    </div>
                ) : null}
                <br />
                <ApiErrorCard error={error} />
                <NussOperationsTable operations={loadedOperations} />

                <center>
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#f50057',
                            fontFamily: 'IBM Plex Mono',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                        endIcon={<Icon>add</Icon>}
                        onClick={() => {
                            setOffset(offset + 10);
                        }}
                    >
                        Load More
                    </Button>
                </center>
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
                                fontWeight: 'bold',
                            }}
                        >
                            Operations
                        </Typography>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <center>
                    <Typography variant="h5" style={{ fontFamily: 'IBM Plex Mono' }}>
                        Please define NUSS Credentials!
                    </Typography>{' '}
                    <br /> <br />
                    <SetOperatorCreds setCreds={setCreds} />
                </center>
            </div>
        );
    }
};

export default NussInspector;
