import React, { useContext } from 'react';
import { Cartesian3, Transforms } from 'cesium';
import { Viewer, CameraFlyTo, Model } from 'resium';
import glb from '../../assets/Cesium_Air.glb';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const CesiumMap = observer(() => {

    const askariStore = useContext(AskariStoreContext);

    const positions = Object.values(askariStore.positions);

    const cameraDest = Cartesian3.fromDegrees(-122.43438720703125, 37.77722770873696, 20000);

    const RenderPositionModels = ({ position }) => {

        console.log(position);

        const origin = Cartesian3.fromDegrees(position.data.latDeg, position.data.lonDeg, 2000.0);

        const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);

        return (
            <Model
                url={glb}
                modelMatrix={modelMatrix}
                minimumPixelSize={128}
                maximumScale={20000}
            />);
    }

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

            {positions.map(position => {

                const origin = Cartesian3.fromDegrees(position.data.lonDeg, position.data.latDeg, 2000.0);

                const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);

                return (
                    <Model
                        key={position.data.vid}
                        id={position.data.vid}
                        url={glb}
                        modelMatrix={modelMatrix}
                        minimumPixelSize={128}
                        maximumScale={20000}
                    />


                );
            })}


        </Viewer>
    );
});

export default CesiumMap;
