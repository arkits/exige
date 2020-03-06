import React, { useContext } from 'react';
import { Socket } from 'react-socket-io';
import SioEvents from './SioEvents';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const SioClient = observer(() => {
    const uri = 'http://localhost:8786';
    const options = { transports: ['websocket'] };

    const askariStore = useContext(AskariStoreContext);

    /*
    const uri = "https://archit.xyz/";
    const options = { 
      transports: ["websocket"],
      path: "/exige/socket.io/" 
    };
    */

    if (askariStore.sio.isEnabled) {
        return (
            <>
                <Socket uri={uri} options={options}>
                    <SioEvents />
                </Socket>
            </>
        );
    } else {
        return null;
    }
});

export default SioClient;
