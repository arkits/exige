import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { observer } from "mobx-react";
import { AskariStoreContext } from "../store/AskariStore";

const AskariSnackbar = observer(() => {
  const askariStore = useContext(AskariStoreContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    askariStore.snackbar.isOpen = false;
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={askariStore.snackbar.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={askariStore.snackbar.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      ></Snackbar>
    </>
  );
});

export default AskariSnackbar;
