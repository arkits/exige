import React, { useContext, useRef } from 'react';
import { Cartesian3, Transforms, Math } from 'cesium';
import { Viewer, CameraFlyTo, Model } from 'resium';
import glb from '../../assets/Cesium_Air.glb';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const CesiumMap = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    let viewer = useRef();

    const positions = Object.values(askariStore.positions);

    const cameraDest = Cartesian3.fromDegrees(-122.43438720703125, 37.77722770873696, 20000);

    const onClick = data => {
        var { longitudeString, latitudeString } = calculateCoordinateFromCartesian(data.position);

        console.log("You clicked on - ", longitudeString, latitudeString)
    };

    const calculateCoordinateFromCartesian = cartesianPosition => {
        if (!viewer.scene) return;

        var ellipsoid = viewer.scene.globe.ellipsoid;

        var cartesian = viewer.scene.camera.pickEllipsoid(cartesianPosition, ellipsoid);

        if (!cartesian) return;

        var cartographicLocation = ellipsoid.cartesianToCartographic(cartesian);

        var longitudeString = Math.toDegrees(cartographicLocation.longitude).toFixed(15);
        var latitudeString = Math.toDegrees(cartographicLocation.latitude).toFixed(15);

        return { longitudeString, latitudeString };
    };

    const onMouseMove = data => {
        var { longitudeString, latitudeString } = calculateCoordinateFromCartesian(
            data.endPosition
        );

        askariStore.mouseLocation['lng'] = longitudeString;
        askariStore.mouseLocation['lat'] = latitudeString;
    };

    return (
        <Viewer
            full
            animation={false}
            timeline={false}
            clockViewModel={null}
            shadows={false}
            fullscreenButton={false}
            selectionIndicator={false}
            automaticallyTrackDataSourceClocks={false}
            projectionPicker={false}
            onClick={onClick}
            onMouseMove={onMouseMove}
            ref={e => {
                viewer = e ? e.cesiumElement : null;
            }}
        >
            <CameraFlyTo destination={cameraDest} duration={0} once={true} />

            {positions.map(position => {
                const origin = Cartesian3.fromDegrees(
                    position.data.lonDeg,
                    position.data.latDeg,
                    2000.0
                );

                const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);

                return (
                    <Model
                        key={position.data.vid}
                        id={position.data.vid}
                        url={glb}
                        modelMatrix={modelMatrix}
                        minimumPixelSize={128}
                        maximumScale={100}
                    />
                );
            })}
        </Viewer>
    );
});

export default CesiumMap;
