import React from 'react';
import { Project } from 'arwes';

function Sidebar({ data }) {
    return (
        <div className="ComposerSidebar">
            <Project header="Operation Composer" icon={null}>
                <pre style={{ fontSize: 12 }}>{JSON.stringify(data, null, 2)}</pre>
            </Project>
        </div>
    );
}

export default Sidebar;
