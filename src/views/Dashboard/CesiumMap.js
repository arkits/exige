import React, { useContext, useRef } from 'react';
import { Cartesian3, Transforms, Math, Color } from 'cesium';
import { Viewer, CameraFlyTo, Model, PolygonGraphics, Entity, GeoJsonDataSource } from 'resium';
import glb from '../../assets/Cesium_Air.glb';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const CesiumMap = observer(() => {

    const askariStore = useContext(AskariStoreContext);

    let viewer = useRef();

    const positions = Object.values(askariStore.positions);
    const operations = Object.values(askariStore.operations);

    /**
     * DFW - -96.90490722656249, 32.90783871693625
     * Test Site - -117.948840950631, 34.739227113042
     * SFO - -122.3789554, 37.6213129
     */

    const cameraDest = Cartesian3.fromDegrees( -122.3789554, 37.6213129, 100000);

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

        if (!viewer) return { longitudeString, latitudeString };

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

        askariStore.mouseLocation['lng'] = parseFloat(longitudeString);
        askariStore.mouseLocation['lat'] = parseFloat(latitudeString);
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

            <GeoJsonDataSource data={askariStore.gridTiles.tilesData} fill={Color.ORANGE.withAlpha(0)}/>

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

            {operations.map(operation => {

                let entities = [];
                
                for (var operationVolume of operation.operation_volumes) {

                    var id = operation.gufi + '_' + operationVolume.ordinal;

                    var coordsArray = [];

                    for (var coords of operationVolume.protected_geography.coordinates[0]) {
                        for (var coord of coords) {
                            coordsArray.push(coord);
                        }
                        coordsArray.push(operationVolume.max_altitude_protected_wgs84_ft);
                    }

                    const polygon = Cartesian3.fromDegreesArrayHeights(coordsArray);

                    entities.push(
                        <Entity key={id} name={id}>
                            <PolygonGraphics
                                name={id}
                                extrudedHeight={operationVolume.min_altitude_protected_wgs84_ft}
                                perPositionHeight={true}
                                hierarchy={polygon}
                                material={Color.ORANGE.withAlpha(0.5)}
                                outlineColor={Color.BLACK}
                                outline={true}
                            />
                        </Entity>
                    );
                }

                return entities;
            })}
        </Viewer>
    );
});

export default CesiumMap;
