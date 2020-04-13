import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class AskariStore {
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
    gridTiles = {
        enabled: false,
        tilesData: null,
        zoomLevel: 10,
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

decorate(AskariStore, {
    sio: observable,
    operations: observable,
    positions: observable,
    mouseLocation: observable,
    gridZoomLevel: observable,
    snackbar: observable,
    elementsToggle: observable,
    map: observable,
    drawerOpen: observable,
});

export const AskariStoreContext = createContext(new AskariStore());
