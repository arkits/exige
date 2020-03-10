import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';
import OptionsButton from './OptionsButton';
import AddDataButton from './AddDataButton';
import ElementToggle from './ElementToggle';

const OptionsBar = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const toggleSioConnection = () => {
        askariStore.snackbar.message = "Toggling Socket.IO Connection...";
        askariStore.snackbar.isOpen = true;
        askariStore.sio.isEnabled = !askariStore.sio.isEnabled;
    }

    return (
        <div className="OptionsBar">
            
            <OptionsButton />
            <AddDataButton />
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
                        backgroundColor: askariStore.sio.status === 'CONNECTED' ? '#1b5e20' : '#d50000',
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                    onClick={toggleSioConnection}
                >
                    S.IO: {askariStore.sio.status}
                </Button>
            </div>
        </div>
    );
});

export default OptionsBar;
