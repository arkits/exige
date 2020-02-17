import React from 'react';
import { Project } from 'arwes';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../../store/ExigeStore';

function Sidebar({ data }) {
    const OperationsVolumes = ({ features }) => {
        let operationVolumes = [];

        const store = React.useContext(StoreContext);

        if (features !== null && features.length > 0) {
            features.forEach(feature => {
                operationVolumes.push(feature.geometry);
            });

            store.operations[0] = features;
        }

        return (
            <textarea
                className="composerSidebarTextarea"
                value={JSON.stringify(operationVolumes, null, 2)}
            />
        );
    };

    return (
        <div className="fh">
            <Project className="fh" animate header="Composer" icon={null}>
                <OperationsVolumes features={data} />
            </Project>
        </div>
    );
}

export default Sidebar;
