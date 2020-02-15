import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'arwes/lib/Grid';
import MapGL, { Source, Layer } from 'react-map-gl';
import { Editor, EditorModes } from 'react-map-gl-draw';
import { getFeatureStyle, getEditHandleStyle } from './DrawStyles';
import MouseLocationPanel from './MouseLocationPanel';
import Sidebar from '../Composer/Sidebar';

const TOKEN =
    'pk.eyJ1IjoiYXJraXRzIiwiYSI6ImNqc3Bud29jMjAzcWc0OXJ6Y3YzOHltaTcifQ.EMMG5GSbT0T-lD8RGJgnAA';

class Map extends Component {
    constructor(props) {
        super(props);
        this._editorRef = null;
        this.state = {
            viewport: {
                latitude: 37.72293542866175,
                longitude: -122.42614746093749,
                zoom: 10
            },
            mode: EditorModes.READ_ONLY,
            selectedFeatureIndex: null,
            mouseLocation: {},
            gridAdaptation: null,
            gridAdaptationZoomLevel: '10'
        };
    }

    _updateViewport = viewport => {
        this.setState({ viewport });
    };

    _onSelect = options => {
        this.setState({
            selectedFeatureIndex: options && options.selectedFeatureIndex
        });
    };

    _onDelete = () => {
        const selectedIndex = this.state.selectedFeatureIndex;
        if (selectedIndex !== null && selectedIndex >= 0) {
            this._editorRef.deleteFeatures(selectedIndex);
        }
    };

    _onUpdate = ({ editType }) => {
        if (editType === 'addFeature') {
            this.setState({
                mode: EditorModes.EDITING
            });
        }
    };

    _renderDrawTools = () => {
        return (
            <div className="mapboxgl-ctrl-top-left">
                <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
                    <button
                        className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
                        title="Polygon tool (p)"
                        onClick={() => this.setState({ mode: EditorModes.DRAW_POLYGON })}
                    />
                    <button
                        className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
                        title="Delete"
                        onClick={this._onDelete}
                    />
                </div>
            </div>
        );
    };

    _renderMouseLocationPanel = () => {
        return (
            <MouseLocationPanel
                containerComponent={this.props.containerComponent}
                mouseLocation={this.state.mouseLocation}
                zoomLevel={this.state.gridAdaptationZoomLevel}
            />
        );
    };

    _renderComposerSidebar = () => {
        const features = this._editorRef && this._editorRef.getFeatures();
        return <Sidebar data={features} />;
    };

    _updateMouseLocation = e => {
        this.setState({
            mouseLocation: {
                latitude: e['lngLat'][1],
                longitude: e['lngLat'][0]
            }
        });
    };

    _handleGridSelectChange = event => {
        let zoomLevel = event.target.value;

        if (zoomLevel !== 0) {
            this.setState({ gridAdaptationZoomLevel: zoomLevel });

            let gridAdaptationUrl =
                'https://raw.githubusercontent.com/arkits/exige-react/master/grid/' +
                zoomLevel +
                '.json';

            console.log(gridAdaptationUrl);

            axios.get(gridAdaptationUrl).then(response => {
                console.log('Got Grid Adaptation!');
                this.setState({ gridAdaptation: null });
                this.setState({ gridAdaptation: response.data });
            });
        }
    };

    render() {
        const { viewport, mode } = this.state;
        return (
            <div className="Map">
                <Row>
                    <Col s={12} m={9}>
                        <MapGL
                            {...viewport}
                            width="100%"
                            height="85vh"
                            mapStyle="mapbox://styles/mapbox/dark-v9"
                            mapboxApiAccessToken={TOKEN}
                            onViewportChange={this._updateViewport}
                            onMouseMove={this._updateMouseLocation}
                        >
                            <Editor
                                ref={_ => (this._editorRef = _)}
                                style={{ width: '100%', height: '100%' }}
                                clickRadius={12}
                                mode={mode}
                                onSelect={this._onSelect}
                                onUpdate={this._onUpdate}
                                editHandleShape={'circle'}
                                featureStyle={getFeatureStyle}
                                editHandleStyle={getEditHandleStyle}
                            />

                            <Source type="geojson" data={this.state.gridAdaptation}>
                                <Layer
                                    id="1"
                                    type="fill"
                                    paint={{
                                        'fill-color': 'rgba(255,255,255,0.0)',
                                        'fill-outline-color': 'rgba(51, 181, 229,1.0)',
                                        'fill-opacity': 1
                                    }}
                                />
                            </Source>

                            {this._renderDrawTools()}

                            {this._renderMouseLocationPanel()}
                        </MapGL>
                    </Col>

                    <Col s={12} m={3}>
                        <h3>
                            <select
                                id="gridZoomSelect"
                                value={this.state.value}
                                onChange={this._handleGridSelectChange}
                            >
                                <option value="0">Zoom Level</option>
                                <option value="12">12</option>
                                <option value="11">11</option>
                                <option value="10">10</option>
                                <option value="9">9</option>
                            </select>
                        </h3>

                        {this._renderComposerSidebar()}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Map;
