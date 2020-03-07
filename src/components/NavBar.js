import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
    fontFamily: "IBM Plex Mono",
    fontWeight: "bold",
    fontStyle: "italic"
  }
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar style={{ background: '#212121' }} position="static">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
        >
          ~/Exige Reborn
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Map
        </Button>
        <Button component={Link} to="/inspector" color="inherit">
          Inspector
        </Button>
        <Button component={Link} to="/about" color="inherit">
          Debug
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
