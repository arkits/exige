import React from "react";
import { Project, Code } from "arwes";

function MapPanel({ mouseLocation, features }) {
  return (
    <div className="MapPanel">
      <Project header="Output">
        <Code>{JSON.stringify(features, null, 2)}</Code>
      </Project>
      <Project header="Mouse Location">
        <Code>{JSON.stringify(mouseLocation, null, 2)}</Code>
      </Project>
    </div>
  );
}

export default MapPanel;
