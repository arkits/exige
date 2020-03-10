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
                    style={{
                        fontFamily: 'IBM Plex Mono',
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                >
                    Mouse Location
                </Button>
                <Button
                    variant={askariStore.elementsToggle.operationsTable ? 'contained' : 'outlined'}
                    onClick={() => toggleElement('operationsTable')}
                    style={{
                        fontFamily: 'IBM Plex Mono',
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                >
                    Operations
                </Button>
                <Button
                    variant={askariStore.elementsToggle.positionsTable ? 'contained' : 'outlined'}
                    onClick={() => toggleElement('positionsTable')}
                    style={{
                        fontFamily: 'IBM Plex Mono',
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                >
                    Positions
                </Button>
            </ButtonGroup>
        </div>
    );
});

export default ElementToggle;
