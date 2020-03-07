import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { observer } from 'mobx-react';
import { AskariStoreContext } from '../../../store/AskariStore';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

const RenderGridToggleSwitch = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const [switchState, setSwitchState] = React.useState(askariStore.gridTiles.enabled);

    const toggleGridTile = () => {
        // console.log('Toggling to', !askariStore.gridTiles.enabled);
        askariStore.gridTiles.enabled = !askariStore.gridTiles.enabled;
        setSwitchState(askariStore.gridTiles.enabled);

        let gridAdaptationUrl =
            'https://raw.githubusercontent.com/arkits/exige-react/master/grid/' + askariStore.gridTiles.zoomLevel + '.json';

        axios.get(gridAdaptationUrl).then(response => {
            console.log('Got Grid Adaptation!');
            askariStore.gridTiles.tilesData = response.data;
        });
    };

    return <Switch checked={switchState} value="gridTileSwitch" onChange={toggleGridTile} />;
});

const RenderZoomLevelSelect = observer(() => {
    const askariStore = useContext(AskariStoreContext);

    const [zoomLevel, setZoomLevel] = React.useState(askariStore.gridTiles.zoomLevel);

    const selectZoomLevel = event => {
        askariStore.gridTiles.zoomLevel = event.target.value;
        setZoomLevel(askariStore.gridTiles.zoomLevel);
    };

    return (
        <Select value={zoomLevel} onChange={selectZoomLevel}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={9}>9</MenuItem>
        </Select>
    );
});

const OptionsList = () => {
    return (
        <div>
            <Grid container spacing={3} direction="row" justify="space-around" alignItems="center">
                <Grid item>
                    <Typography variant="body1">Show Grid Tiles</Typography>
                </Grid>
                <Grid item xs={3}>
                    <RenderGridToggleSwitch />
                </Grid>
            </Grid>

            <Grid container spacing={3} direction="row" justify="space-around" alignItems="center">
                <Grid item>
                    <Typography variant="body1">Grid Tile Zoom Level</Typography>
                </Grid>
                <Grid item xs={3}>
                    <RenderZoomLevelSelect />
                </Grid>
            </Grid>
        </div>
    );
};

export default OptionsList;
