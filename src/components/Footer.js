import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { observer } from "mobx-react";
import { AskariStoreContext } from "../store/AskariStore";

const Footer = observer(() => {
  const askariStore = useContext(AskariStoreContext);

  return (
    <Typography variant="body2" color="textSecondary">
      <span style={{ display: "flex", flexDirection: "row" }}>
        <Link color="inherit" href="https://archit.xyz/">
          archit.xyz
        </Link>
        <span style={{ marginLeft: "auto" }}>{askariStore.sioStatus}</span>
      </span>
    </Typography>
  );
});

export default Footer;
