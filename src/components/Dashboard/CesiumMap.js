import React from 'react';
import { Cartesian3, Transforms } from 'cesium';
import { Viewer, CameraFlyTo, Model } from 'resium';
import glb from '../../assets/Cesium_Air.glb';

function CesiumMap() {
    
    const origin = Cartesian3.fromDegrees(-122.43438720703125, 37.77722770873696, 2000.0);
    const cameraDest = Cartesian3.fromDegrees(-122.43438720703125, 37.77722770873696, 210000);
    const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);

    return (
        <Viewer
            full
            timeline={false}
            clockViewModel={null}
            shadows={false}
            fullscreenButton={false}
            selectionIndicator={false}
            automaticallyTrackDataSourceClocks={false}
            projectionPicker={false}
        >
            <CameraFlyTo destination={cameraDest} duration={0} />
            <Model
                url={glb}
                modelMatrix={modelMatrix}
                minimumPixelSize={128}
                maximumScale={20000}
            />
        </Viewer>
    );
}

export default CesiumMap;
