import React from 'react';
import { useLocalStore } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        zoomLevel: 10,
        operations: [],
        positions: [],
        addOperation: operation => {
            store.operations.push(operation);
        },
        get operationsCount() {
            return store.operations.length;
        }
    }));

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreProvider, StoreContext };
