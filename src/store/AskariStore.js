import { observable, decorate } from "mobx";
import { createContext } from "react";

class AskariStore {
  sio = {
    status: "DISCONNECTED",
    isEnabled: false
  };
  positions = {};
  mouseLocation = {};
  snackbar = {
    message: null,
    isOpen: false,
    type: null
  };
  elementsToggle = {
    mouseLocation: true,
    positionsTable: false
  };
  gridTiles = {
    enabled: false,
    tilesData: null,
    zoomLevel: 10
  }
}

decorate(AskariStore, {
  sio: observable,
  positions: observable,
  mouseLocation: observable,
  gridZoomLevel: observable,
  snackbar: observable,
  elementsToggle: observable
});

export const AskariStoreContext = createContext(new AskariStore());
