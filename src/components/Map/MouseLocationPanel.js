import React from 'react';
import { Frame } from 'arwes';

function MouseLocationPanel({ mouseLocation, zoomLevel }) {
    const calcMouseLocationDetail = () => {

        if(mouseLocation['latitude'] == null || mouseLocation['longitude'] == null){
            return {};
        }

        // Conversion from co-ordinate to Slippy X/Y adapted from
        // https://github.com/interuss/dss/blob/legacy/tcl4/datanode/src/slippy_util.py  
        
        let latitude_rad = Math.PI * (mouseLocation['latitude'] / 180);
        let n = 2.0 ** zoomLevel;
        let xtile = Math.trunc(((mouseLocation['longitude'] + 180.0) / 360.0) * n);
        let ytile = Math.trunc(((1.0 - Math.log(Math.tan(latitude_rad) + 1 / Math.cos(latitude_rad)) / Math.PI) / 2.0) * n);

        mouseLocation['x'] = xtile;
        mouseLocation['y'] = ytile;
        mouseLocation['zoomLevel'] = parseInt(zoomLevel);

        return mouseLocation;
    };

    return (
        <div className="MouseLocationPanel">
            <Frame corners={4} layer="primary">
                <div style={{ padding:'10px 20px' }}>
                    <pre style={{ fontSize: 14 }}>
                        {JSON.stringify(calcMouseLocationDetail(), null, 2)}
                    </pre>
                </div>
            </Frame>
        </div>
    );
}

export default MouseLocationPanel;
