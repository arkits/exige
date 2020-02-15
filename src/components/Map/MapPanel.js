import React from "react";
import { Project } from "arwes";

function MapPanel({ mouseLocation }) {
  return (
    <div className="MapPanel">
      <Project header="Mouse Location" icon={null}>
        <pre style={{fontSize:12}}>{JSON.stringify(mouseLocation, null, 2)}</pre>
      </Project>
    </div>
  );
}

export default MapPanel;
