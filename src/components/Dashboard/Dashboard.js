import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';
import MouseLocationPanel from './MouseLocationPanel';
import OptionsBar from './OptionsBar/OptionsBar';
import Map from './Map';
import PositionsTable from './PositionsTable';

import './Dashboard.css';

const RenderMouseLocationPanel = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    if (askariStore.elementsToggle.mouseLocation) {
        return <MouseLocationPanel />;
    } else {
        return null;
    }
});

const RenderPositionsTable = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    if (askariStore.elementsToggle.positionsTable) {
        return <PositionsTable />;
    } else {
        return null;
    }
});

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Map />
            <RenderMouseLocationPanel />
            <RenderPositionsTable />
            <OptionsBar />
        </div>
    );
};

export default Dashboard;
