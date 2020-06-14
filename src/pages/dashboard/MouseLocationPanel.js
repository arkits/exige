import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { ExigeStoreContext } from '../../store/ExigeStore';

const MouseLocationPanel = observer(() => {
    const exigeStore = useContext(ExigeStoreContext);

    const calcMouseLocationDetail = () => {
        let mouseLocation = exigeStore.mouseLocation;
        let zoomLevel = 10;

        // Conversion from co-ordinate to Slippy X/Y adapted from
        // https://github.com/interuss/dss/blob/legacy/tcl4/datanode/src/slippy_util.py

        let latitudeRad = Math.PI * (mouseLocation['lat'] / 180);
        let n = 2.0 ** zoomLevel;
        let xtile = Math.trunc(((mouseLocation['lng'] + 180.0) / 360.0) * n);
        let ytile = Math.trunc(
            ((1.0 - Math.log(Math.tan(latitudeRad) + 1 / Math.cos(latitudeRad)) / Math.PI) / 2.0) *
                n
        );

        mouseLocation['x'] = xtile;
        mouseLocation['y'] = ytile;
        mouseLocation['zoomLevel'] = parseInt(zoomLevel);

        return mouseLocation;
    };

    return (
        <div className="MouseLocationPanel">
            <div style={{ fontFamily: 'IBM Plex Mono', fontWeight: 'bold', fontStyle: 'italic' }}>
                Mouse Location
            </div>
            <pre style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px' }}>
                {JSON.stringify(calcMouseLocationDetail(), null, 2)}
            </pre>
        </div>
    );
});

export default MouseLocationPanel;
