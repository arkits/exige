import { observable, decorate } from 'mobx';
import { createContext } from 'react';
import { Color } from 'cesium';

class ExigeStore {
    sio = {
        status: 'DISCONNECTED',
        isEnabled: false,
    };
    operations = {
        'cc45e730-f464-465b-803f-30ca28751e04': {
            gufi: 'cc45e730-f464-465b-803f-30ca28751e04',
            state: 'ACTIVE',
            owner: 'exige.xyz',
            exige: {
                hidden: false,
                color: Color.GREEN.withAlpha(0.5),
            },
            volumes: [
                {
                    volume: {
                        outline_polygon: {
                            vertices: [
                                {
                                    lng: -122.50682830810545,
                                    lat: 37.77587088725018,
                                },
                                {
                                    lng: -122.398681640625,
                                    lat: 37.8065289741725,
                                },
                                {
                                    lng: -122.35954284667967,
                                    lat: 37.71859032558816,
                                },
                                {
                                    lng: -122.48794555664061,
                                    lat: 37.72320698914131,
                                },
                            ],
                        },
                        altitude_lower: {
                            value: 200,
                            reference: 'W84',
                            units: 'M',
                        },
                        altitude_upper: {
                            value: 500,
                            reference: 'W84',
                            units: 'M',
                        },
                    },
                },
            ],
        },
        '921dceae-7ada-421b-a810-8ff193a144b5': {
            gufi: '921dceae-7ada-421b-a810-8ff193a144b5',
            state: 'CONTINGENT',
            owner: 'exige.xyz',
            exige: {
                hidden: false,
                color: Color.RED.withAlpha(0.5),
            },
            volumes: [
                {
                    volume: {
                        outline_polygon: {
                            vertices: [
                                {
                                    lng: -122.58613586425781,
                                    lat: 37.62565281710451,
                                },
                                {
                                    lng: -122.48176574707031,
                                    lat: 37.623205521597406,
                                },
                                {
                                    lng: -122.4872589111328,
                                    lat: 37.59274354910639,
                                },
                                {
                                    lng: -122.58991241455077,
                                    lat: 37.601448242831204,
                                },
                            ],
                        },
                        altitude_lower: {
                            value: 200,
                            reference: 'W84',
                            units: 'M',
                        },
                        altitude_upper: {
                            value: 500,
                            reference: 'W84',
                            units: 'M',
                        },
                    },
                },
                {
                    volume: {
                        outline_polygon: {
                            vertices: [
                                {
                                    lng: -122.47970581054688,
                                    lat: 37.612055711412815,
                                },

                                {
                                    lng: -122.3818588256836,
                                    lat: 37.63489742852906,
                                },

                                {
                                    lng: -122.37018585205077,
                                    lat: 37.60308025953392,
                                },
                                {
                                    lng: -122.48451232910155,
                                    lat: 37.57859625002284,
                                },
                            ],
                        },
                        altitude_lower: {
                            value: 200,
                            reference: 'W84',
                            units: 'M',
                        },
                        altitude_upper: {
                            value: 500,
                            reference: 'W84',
                            units: 'M',
                        },
                    },
                },
            ],
        },
        // '0c145a38-231a-46ef-95f9-e30b1db43ae8': {
        //     gufi: '0c145a38-231a-46ef-95f9-e30b1db43ae8',
        //     state: 'ACTIVE',
        //     owner: 'exige.xyz',
        // },
    };
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
            latitude: 37.69,
            longitude: -122.44,
            altitude: 50000,
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
