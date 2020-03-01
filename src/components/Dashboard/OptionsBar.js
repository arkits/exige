import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const OptionsBar = (() => {

  return (
    <div className="OptionsBar">
      <Button
        variant="text"
        color="primary"
        endIcon={<Icon>settings</Icon>}
        style={{ color: "#33b5e5" }}
      >
        Options
      </Button>

      <Button
        variant="text"
        style={{
          marginLeft: "auto",
          textTransform: "none",
          fontFamily: "IBM Plex Mono",
          fontWeight: "bold",
          fontStyle: "italic"
        }}
      >
        ~/Exige Reborn
      </Button>
    </div>
  );
});

export default OptionsBar;
