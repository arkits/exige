import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';

const ElementToggle = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const toggleElement = elementName => {
        askariStore.elementsToggle[elementName] = !askariStore.elementsToggle[elementName];
    };

    return (
        <div
            style={{
                marginLeft: 'auto'
            }}
        >
            <ButtonGroup color="secondary" aria-label="outlined primary button group">
                <Button
                    variant={askariStore.elementsToggle.mouseLocation ? 'contained' : 'outlined'}
                    onClick={() => toggleElement('mouseLocation')}
                >
                    Mouse Location
                </Button>
                <Button
                    variant={askariStore.elementsToggle.positionsTable ? 'contained' : 'outlined'}
                    onClick={() => toggleElement('positionsTable')}
                >
                    Positions Table
                </Button>
            </ButtonGroup>
        </div>
    );
});

export default ElementToggle;
