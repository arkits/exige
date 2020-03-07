import React, { useContext, useRef } from 'react';
import { Cartesian3, Transforms, Math, Color } from 'cesium';
import { Viewer, CameraFlyTo, Model, EntityDescription, PolygonGraphics, Entity } from 'resium';
import glb from '../../assets/Cesium_Air.glb';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const CesiumMap = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    let viewer = useRef();

    const positions = Object.values(askariStore.positions);

    const cameraDest = Cartesian3.fromDegrees(-96.90490722656249, 32.90783871693625, 100000);

    var polygon = Cartesian3.fromDegreesArrayHeights([
        -96.95091247558592, 32.761294309779, 10000,
        -96.69960021972656, 32.761294309779, 10000,
        -96.69960021972656, 32.869206792437, 10000,
        -96.95091247558592, 32.869206792437, 10000
    ]);

    const onClick = data => {
        var { longitudeString, latitudeString } = calculateCoordinateFromCartesian(data.position);

        askariStore.snackbar.message =
            'Copied location - ' + latitudeString + ', ' + longitudeString;
        askariStore.snackbar.isOpen = true;

        navigator.clipboard.writeText(latitudeString + ', ' + longitudeString);
    };

    const calculateCoordinateFromCartesian = cartesianPosition => {
        var longitudeString = 0;
        var latitudeString = 0;

        if (!viewer.scene) return { longitudeString, latitudeString };

        var ellipsoid = viewer.scene.globe.ellipsoid;

        var cartesian = viewer.scene.camera.pickEllipsoid(cartesianPosition, ellipsoid);

        if (!cartesian) return { longitudeString, latitudeString };

        var cartographicLocation = ellipsoid.cartesianToCartographic(cartesian);

        longitudeString = Math.toDegrees(cartographicLocation.longitude).toFixed(15);
        latitudeString = Math.toDegrees(cartographicLocation.latitude).toFixed(15);

        if (!longitudeString || !latitudeString) return { longitudeString, latitudeString };

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

            <Entity>
                <PolygonGraphics
                    extrudedHeight={0}
                    perPositionHeight={true}
                    hierarchy={polygon}
                    material={Color.ORANGE.withAlpha(0.5)}
                    outlineColor={Color.BLACK}
                    outline={true}
                />
            </Entity>

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
