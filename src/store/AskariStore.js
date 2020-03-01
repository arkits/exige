import { observable, decorate } from "mobx";
import { createContext } from "react";

class AskariStore {
  sioStatus = "DISCONNECTED";
  positions = {};
  mouseLocation = {};
  gridZoomLevel = 10;
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
    tilesData: null
  }
}

decorate(AskariStore, {
  sioStatus: observable,
  positions: observable,
  mouseLocation: observable,
  gridZoomLevel: observable,
  snackbar: observable,
  elementsToggle: observable
});

export const AskariStoreContext = createContext(new AskariStore());
