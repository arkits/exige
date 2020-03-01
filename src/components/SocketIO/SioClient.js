import React from "react";
import { Socket } from "react-socket-io";
import SioEvents from "./SioEvents";

const SioClient = () => {

  const uri = "http://localhost:4001";
  const options = { transports: ["websocket"] };

  return (
    <>
      <Socket uri={uri} options={options}>
        <SioEvents />
      </Socket>
    </>
  );
};

export default SioClient;
