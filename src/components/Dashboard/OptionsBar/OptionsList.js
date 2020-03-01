import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const RenderGridToggleSwitch = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const [switchState, setSwitchState] = React.useState(askariStore.gridTiles.enabled);

    const toggleGridTile = () => {
        // console.log('Toggling to', !askariStore.gridTiles.enabled);
        askariStore.gridTiles.enabled = !askariStore.gridTiles.enabled;
        setSwitchState(askariStore.gridTiles.enabled);
    };

    return <Switch checked={switchState} value="gridTileSwitch" onChange={toggleGridTile} />;
});

const OptionsList = observer(() => {
    return (
        <div>
            <Grid container spacing={3} direction="row" justify="space-around" alignItems="center">
                <Grid item xs={3}>
                    <Typography variant="body1">Show Grid Tiles</Typography>
                </Grid>
                <Grid item xs={3}>
                    <RenderGridToggleSwitch />
                </Grid>
            </Grid>
        </div>
    );
});

export default OptionsList;
