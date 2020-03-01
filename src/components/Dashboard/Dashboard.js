import React from "react";
import { observer } from "mobx-react";

import MouseLocationPanel from "./MouseLocationPanel";
import OptionsBar from "./OptionsBar";
import Map from "./Map";
import PositionsTable from "./PositionsTable";

import "./Dashboard.css";

const Dashboard = observer(() => {
  return (
    <div className="Dashboard">
      <Map />
      <MouseLocationPanel />
      <PositionsTable />
      <OptionsBar />
    </div>
  );
});

export default Dashboard;
