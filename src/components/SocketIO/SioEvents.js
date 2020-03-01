import React, { useContext } from "react";
import { Event } from "react-socket-io";
import { observer } from "mobx-react";
import { AskariStoreContext } from "../../store/AskariStore";

const SioEvents = observer(() => {
    const askariStore = useContext(AskariStoreContext);
  
    const onConnect = () => {
      console.log("Connected!");
      askariStore.sioStatus = "CONNECTED";
    };
  
    const onData = (data) => {
      console.log("Data! - ", data);
      askariStore.positions[data["vehicleId"]] = data;
    };
  
    return (
      <>
        <Event event="connect" handler={onConnect} />
        <Event event="outgoing data" handler={onData} />
      </>
    );
  });

export default SioEvents;
