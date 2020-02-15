import React from "react";
import { Project, Code } from "arwes";

function MapPanel({ mouseLocation }) {
  return (
    <div className="MapPanel">
      <Project header="Mouse Location" icon={null}>
        <Code>{JSON.stringify(mouseLocation, null, 2)}</Code>
      </Project>
    </div>
  );
}

export default MapPanel;
