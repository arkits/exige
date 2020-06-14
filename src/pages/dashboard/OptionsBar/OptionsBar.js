import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function OptionsBar() {
    return (
        <div className="OptionsBar">
            <Button
                variant="contained"
                color="primary"
                style={{
                    marginLeft: '10px',
                    fontFamily: 'IBM Plex Mono',
                    color: 'white',
                    fontWeight: 'bold',
                }}
                endIcon={<Icon>settings</Icon>}
            >
                Options
            </Button>
            <Button
                variant="contained"
                style={{
                    marginLeft: '10px',
                    backgroundColor: '#2e7d32',
                    fontFamily: 'IBM Plex Mono',
                    color: 'white',
                    fontWeight: 'bold',
                }}
                endIcon={<Icon>add</Icon>}
            >
                Manage Data
            </Button>
        </div>
    );
}

export default OptionsBar;
