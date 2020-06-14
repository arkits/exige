import React from 'react';
import Map from './Map';
import OptionsBar from './OptionsBar/OptionsBar';
import './Dashboard.css';
import MouseLocationPanel from './MouseLocationPanel';

function Dashboard() {
    return (
        <div>
            <Map />
            <OptionsBar />
            <MouseLocationPanel />
        </div>
    );
}

export default Dashboard;
