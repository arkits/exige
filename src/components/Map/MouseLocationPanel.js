import React from 'react';
import { Project } from 'arwes';

function MouseLocationPanel({ mouseLocation, zoomLevel }) {

    let latitude_rad = Math.PI * (mouseLocation['latitude'] / 180);

    let n = 2.0 ** zoomLevel;

    let xtile = Math.trunc(((mouseLocation['longitude'] + 180.0) / 360.0 * n));
    
    let ytile = Math.trunc(
        ((1.0 - Math.log(Math.tan(latitude_rad) + 1 / Math.cos(latitude_rad)) / Math.PI) / 2.0) * n
    );

    mouseLocation['x'] = xtile;
    mouseLocation['y'] = ytile;
    mouseLocation['zoomLevel'] = zoomLevel;

    return (
        <div className="MapPanel">

            <Project header="Mouse Location" icon={null}>
                <pre style={{ fontSize: 12 }}>{JSON.stringify(mouseLocation, null, 2)}</pre>
            </Project>
        </div>
    );
}

export default MouseLocationPanel;
