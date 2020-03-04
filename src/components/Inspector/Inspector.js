import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../store/AskariStore';
import DataTable from './DataTable';

const RenderMouseLocationPanel = observer(() => {
    const askariStore = useContext(AskariStoreContext);
});

const Inspector = () => {
    return (
        <div className="Inspector">
            <DataTable />
        </div>
    );
};

export default Inspector;
