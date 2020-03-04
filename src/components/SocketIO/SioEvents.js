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

    const onDisconnect = () => {
      console.log("Disconnect!");
      askariStore.sioStatus = "DISCONNECTED";
    };
  
    const onData = (data) => {
      // console.log("Data! - ", data);
      askariStore.positions[data["data"]["vid"]] = data;
    };
  
    return (
      <>
        <Event event="connect" handler={onConnect} />
        <Event event="disconnect" handler={onDisconnect} />
        <Event event="position" handler={onData} />
      </>
    );
  });

export default SioEvents;
