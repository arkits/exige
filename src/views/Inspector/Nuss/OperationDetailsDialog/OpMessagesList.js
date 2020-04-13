import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useLocalStorage } from '../../../../utils/storage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function OpMessagesList(operation) {
    const [messages, setMessage] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [creds, setCreds] = useLocalStorage('creds', {
        exige_username: '',
        exige_password: '',
        exige_uss_url: '',
    });

    let op = operation.operation;

    const loadMessages = () => {
        console.log('Loading Messages for GUFI - ', op.gufi);
        setIsLoading(true);
        let url = creds.exige_uss_url + '/nuss/operator/messages/' + op.gufi;
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
                console.log('Loaded Messages - ', res.data.length);
                setMessage(res.data);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log('Caught Error when getting Messages!', err);
                let error = {
                    message: err.message,
                    status: err.request.status,
                };
                setError(error);
            });
    };

    useEffect(() => {
        loadMessages();
    }, []);

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
                    onClick={loadMessages}
                >
                    Refresh Messages
                </Button>
                <br /> <br />
            </center>

            {messages.map((message) => {
                return (
                    <div key={message.message_id}>
                        <Card variant="outlined">
                            <CardContent>
                                <pre>{JSON.stringify(message, null, 4)}</pre>
                            </CardContent>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}
