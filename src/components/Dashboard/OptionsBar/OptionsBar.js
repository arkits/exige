import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';
import OptionsButton from './OptionsButton';
import ElementToggle from './ElementToggle';

const OptionsBar = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    return (
        <div className="OptionsBar">
            <OptionsButton />

            <ElementToggle />

            <div
                className="leftStatus"
                style={{
                    marginLeft: 'auto',
                    textTransform: 'none'
                }}
            >
                <Button
                    variant="contained"
                    style={{
                        textTransform: 'none',
                        fontFamily: 'IBM Plex Mono',
                        backgroundColor: askariStore.sioStatus === 'CONNECTED' ? 'green' : 'red',
                        fontWeight: 'bold'
                    }}
                >
                    S.IO: {askariStore.sioStatus}
                </Button>
            </div>
        </div>
    );
});

export default OptionsBar;
