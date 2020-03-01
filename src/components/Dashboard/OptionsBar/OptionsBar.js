import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';
import OptionsButton from './OptionsButton';

const OptionsBar = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    return (
        <div className="OptionsBar">

            <OptionsButton />

            <div
                className="leftStatus"
                style={{
                    marginLeft: 'auto',
                    textTransform: 'none'
                }}
            >
                <Button
                    variant="text"
                    style={{ textTransform: 'none', fontFamily: 'IBM Plex Mono' }}
                >
                    SocketIO: {askariStore.sioStatus}
                </Button>
                <Button
                    variant="text"
                    style={{
                        fontFamily: 'IBM Plex Mono',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontStyle: 'italic'
                    }}
                >
                    ~/Exige Reborn
                </Button>
            </div>
        </div>
    );
});

export default OptionsBar;
