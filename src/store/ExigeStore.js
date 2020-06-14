import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class ExigeStore {
    sio = {
        status: 'DISCONNECTED',
        isEnabled: false,
    };
    operations = {};
    positions = {};
    mouseLocation = {};
    snackbar = {
        message: null,
        isOpen: false,
        type: null,
    };
    elementsToggle = {
        mouseLocation: true,
        operationsTable: true,
        positionsTable: false,
    };
    map = {
        cameraCenter: {
            latitude: 37.6213129,
            longitude: -122.3789554,
            altitude: 100000,
        },
    };
    drawerOpen = true;
}

decorate(ExigeStore, {
    sio: observable,
    operations: observable,
    positions: observable,
    mouseLocation: observable,
    snackbar: observable,
    elementsToggle: observable,
    map: observable,
});

export const ExigeStoreContext = createContext(new ExigeStore());
