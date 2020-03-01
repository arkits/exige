import React, { useContext } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { observer } from "mobx-react";
import { AskariStoreContext } from "../../store/AskariStore";

const MapGl = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXJraXRzIiwiYSI6ImNqc3Bud29jMjAzcWc0OXJ6Y3YzOHltaTcifQ.EMMG5GSbT0T-lD8RGJgnAA"
});

const Map = observer(() => {
  const askariStore = useContext(AskariStoreContext);

  const updateMouseLocation = (_, e) => {
    askariStore.mouseLocation["lat"] = e["lngLat"]["lat"];
    askariStore.mouseLocation["lng"] = e["lngLat"]["lng"];
  };

  const copyLatLng = (_, e) => {
    
    let coordinates = {
      lat: e["lngLat"]["lat"],
      lng: e["lngLat"]["lng"]
    }

    let strCoordinates = JSON.stringify(coordinates);

    console.log("Copied to clipboard - ", strCoordinates);

    navigator.clipboard.writeText(strCoordinates);

    askariStore.snackbar.message = "Copied to co-ordinates to clipboard.";
    askariStore.snackbar.isOpen = true;
    
  };

  return (
    <div className="Map">
      <MapGl
        style="mapbox://styles/mapbox/dark-v9"
        zoom={[9]}
        center={[-122.43438720703125, 37.77722770873696]}
        containerStyle={{
          height: "calc(100vh - 70px)",
          width: "100vw"
        }}
        onMouseMove={updateMouseLocation}
        onClick={copyLatLng}
      ></MapGl>
    </div>
  );
});

export default Map;
