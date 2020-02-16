import React from 'react';
import { Project } from 'arwes';

function Sidebar({ data }) {
    const displayOperationVolumes = features => {
        let operationVolumes = [];

        if (features != null) {
            features.forEach(feature => {
                operationVolumes.push(feature.geometry);
            });
        }

        return JSON.stringify(operationVolumes, null, 2);
    };

    return (
        <div className="fh">
            <Project className="fh" animate header="Composer" icon={null}>
                <textarea className="composerSidebarTextarea" value={displayOperationVolumes(data)} />
            </Project>
        </div>
    );
}

export default Sidebar;
