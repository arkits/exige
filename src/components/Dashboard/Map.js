import React, { useContext, useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';

const MapGl = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiYXJraXRzIiwiYSI6ImNqc3Bud29jMjAzcWc0OXJ6Y3YzOHltaTcifQ.EMMG5GSbT0T-lD8RGJgnAA'
});

const Map = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const [viewport, setViewport] = useState({
      longitude: -122.43438720703125,
      latitude: 37.77722770873696,
      zoom: 9
    });

    const positions = Object.values(askariStore.positions);

    const updateMouseLocation = (_, e) => {
        askariStore.mouseLocation['lat'] = e['lngLat']['lat'];
        askariStore.mouseLocation['lng'] = e['lngLat']['lng'];
    };

    const onViewportChange = (updated) =>{
      setViewport({
        ...viewport,
        longitude: updated.getCenter().lng,
        latitude: updated.getCenter().lat,
        zoom: updated.getZoom()
      })
    }
    const copyLatLng = (_, e) => {
        let coordinates = {
            lat: e['lngLat']['lat'],
            lng: e['lngLat']['lng']
        };

        let strCoordinates = JSON.stringify(coordinates);

        console.log('Copied to clipboard - ', strCoordinates);

        navigator.clipboard.writeText(strCoordinates);

        askariStore.snackbar.message = 'Copied to co-ordinates to clipboard.';
        askariStore.snackbar.isOpen = true;
    };

    return (
        <div className="Map">
            <MapGl
                style="mapbox://styles/mapbox/dark-v9"
                zoom={[viewport.zoom]}
                center={[viewport.longitude, viewport.latitude]}
                containerStyle={{
                    height: 'calc(100vh - 70px)',
                    width: '100vw'
                }}
                onMouseMove={updateMouseLocation}
                onClick={copyLatLng}
                onMoveEnd={onViewportChange}
                onZoomEnd={onViewportChange}
                onPitchEnd={onViewportChange}
            >
                >
                {positions.map(position => {
                    return (
                        <Layer type="symbol" key={position.vehicleId} id={position.vehicleId} layout={{ 'icon-image': 'airport-15' }}>
                            <Feature id={position.vehicleId} coordinates={[position.longitude, position.latitude]} />
                        </Layer>
                    );
                })}
            </MapGl>
        </div>
    );
});

export default Map;
