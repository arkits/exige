import React, { useRef, useContext, useEffect } from 'react';
import { Cartesian3, Transforms, Math, Color, HeadingPitchRoll, Ion } from 'cesium';
import {
    Viewer,
    CameraFlyTo,
    Model,
    PolygonGraphics,
    Entity,
    GeoJsonDataSource,
    CzmlDataSource,
} from 'resium';
import { observer } from 'mobx-react';
import { ExigeStoreContext } from '../../store/ExigeStore';

const Map = observer(() => {
    const exigeStore = useContext(ExigeStoreContext);

    let viewer = useRef();

    let cameraCenter = exigeStore.map.cameraCenter;
    let cameraDest = Cartesian3.fromDegrees(
        cameraCenter.longitude,
        cameraCenter.latitude,
        cameraCenter.altitude
    );

    useEffect(() => {
        console.log('cameraDest got updated!', cameraDest);
    }, [cameraDest]);

    const calculateCoordinateFromCartesian = (cartesianPosition) => {
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

        return { longitudeString, latitudeString };
    };

    const onMouseMove = (data) => {
        var { longitudeString, latitudeString } = calculateCoordinateFromCartesian(
            data.endPosition
        );
        exigeStore.mouseLocation['lng'] = parseFloat(longitudeString);
        exigeStore.mouseLocation['lat'] = parseFloat(latitudeString);
    };

    Ion.defaultAccessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDJkNjJkYy1iMTAxLTQ5NjktYThmNC0zN2YwNjUxYjBkYjUiLCJpZCI6MTk1NzQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzU4NDc3OTJ9.YIZUsKDifeCV1hoT4N1kNoASGQzM3yJoox_GLxdD2lo';

    const operations = Object.values(exigeStore.operations);

    return (
        <div>
            <Viewer
                animation={false}
                timeline={false}
                fullscreenButton={false}
                style={{
                    height: '93vh',
                }}
                ref={(e) => {
                    viewer = e ? e.cesiumElement : null;
                    if (e != null) {
                        viewer.scene.debugShowFramesPerSecond = true;
                        viewer.scene.requestRenderMode = true;
                    }
                }}
                onMouseMove={onMouseMove}
            >
                <CameraFlyTo destination={cameraDest} duration={0} />

                {operations.map((operation) => {
                    if (operation?.exige?.hidden) {
                        return null;
                    }

                    let entities = [];

                    let ordinal = 1;

                    for (var operationVolume of operation.volumes) {
                        var id = operation.gufi + '_' + ordinal;

                        ordinal++;

                        var coordsArray = [];

                        var volume = operationVolume.volume;

                        var polygon = volume.outline_polygon;

                        for (var point of polygon.vertices) {
                            coordsArray.push(point.lng);
                            coordsArray.push(point.lat);
                            coordsArray.push(volume.altitude_upper.value);
                        }

                        const cesiumPolygon = Cartesian3.fromDegreesArrayHeights(coordsArray);

                        entities.push(
                            <Entity key={id} name={id}>
                                <PolygonGraphics
                                    name={id}
                                    extrudedHeight={volume.altitude_lower.value}
                                    perPositionHeight={true}
                                    hierarchy={cesiumPolygon}
                                    material={operation.exige.color}
                                    outlineColor={Color.BLACK}
                                    outline={true}
                                />
                            </Entity>
                        );
                    }

                    return entities;
                })}
            </Viewer>
        </div>
    );
});

export default Map;
