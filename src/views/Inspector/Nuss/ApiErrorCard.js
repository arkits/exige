import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ApiErrorCard = (error) => {
    if (error.error === null) {
        return null;
    } else {
        return (
            <div>
                <Card
                    style={{
                        backgroundColor: 'red',
                    }}
                >
                    <CardContent>
                        <h2>Caught Error - {error.error.message}</h2>
                        <h3>Error Status - {error.error.status}</h3>
                    </CardContent>
                </Card>
                <br />
            </div>
        );
    }
};

export default ApiErrorCard;
