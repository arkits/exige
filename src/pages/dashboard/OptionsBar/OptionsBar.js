import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AboutDialog from '../../../components/AboutDialog';
import DataManager from '../../../components/DataManager/DataManagerDialog';

function OptionsBar() {
    return (
        <div className="OptionsBar">
            <div style={{ flexGrow: 1 }}>
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
                <DataManager />
            </div>

            <AboutDialog />
        </div>
    );
}

export default OptionsBar;
