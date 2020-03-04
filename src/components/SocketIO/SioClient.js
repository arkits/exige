import React from "react";
import { Socket } from "react-socket-io";
import SioEvents from "./SioEvents";

const SioClient = () => {

  const uri = "http://localhost:8786";
  const options = { transports: ["websocket"] };

  /*
  const uri = "https://archit.xyz/";
  const options = { 
    transports: ["websocket"],
    path: "/exige/socket.io/" 
  };
  */

  return (
    <>
      <Socket uri={uri} options={options}>
        <SioEvents />
      </Socket>
    </>
  );
};

export default SioClient;
