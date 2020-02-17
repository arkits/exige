import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'arwes';
import MapGL, { Source, Layer } from 'react-map-gl';
import { Editor, EditorModes } from 'react-map-gl-draw';
import { getFeatureStyle, getEditHandleStyle } from '../Map/DrawStyles';
import MouseLocationPanel from '../Map/MouseLocationPanel';
import Sidebar from './Sidebar';

const TOKEN =
    'pk.eyJ1IjoiYXJraXRzIiwiYSI6ImNqc3Bud29jMjAzcWc0OXJ6Y3YzOHltaTcifQ.EMMG5GSbT0T-lD8RGJgnAA';

class ComposerView extends Component {
    constructor(props) {
        super(props);
        this._editorRef = null;
        this.state = {
            viewport: {
                width: '100%',
                height: '100%',
                latitude: 37.719,
                longitude: -122.344,
                zoom: 10
            },
            mode: EditorModes.READ_ONLY,
            selectedFeatureIndex: null,
            mouseLocation: {},
            gridAdaptation: null,
            gridZoomLevel: '10'
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

    renderDrawTools = () => {
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

    renderMouseLocationPanel = () => {
        return (
            <MouseLocationPanel
                containerComponent={this.props.containerComponent}
                mouseLocation={this.state.mouseLocation}
                zoomLevel={this.state.gridZoomLevel}
            />
        );
    };

    renderComposerSidebar = () => {
        const features = this._editorRef && this._editorRef.getFeatures();
        return <Sidebar data={features} />;
    };

    updateMouseLocation = e => {
        this.setState({
            mouseLocation: {
                latitude: e['lngLat'][1],
                longitude: e['lngLat'][0]
            }
        });
    };

    handleGridZoomLevelSelectChange = event => {
        let zoomLevel = event.target.value;

        this.setState({
            gridZoomLevel: zoomLevel
        })

        this.drawGridTiles(zoomLevel);
    };

    onMapLoad = () => {
        console.log('Map Loaded');
        this.drawGridTiles(this.state.gridZoomLevel);
    };

    drawGridTiles = zoomLevel => {
        if (zoomLevel !== 0) {
            this.setState({ gridAdaptationZoomLevel: zoomLevel });

            let gridAdaptationUrl =
                'https://raw.githubusercontent.com/arkits/exige-react/master/grid/' +
                zoomLevel +
                '.json';

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
            <div className="fh">
                <Row className="fh">
                    <Col s={9} className="fh">
                    <h1>{this.props.viewType}</h1>
                        <MapGL
                            {...viewport}
                            mapStyle="mapbox://styles/mapbox/dark-v9"
                            mapboxApiAccessToken={TOKEN}
                            onViewportChange={this._updateViewport}
                            onMouseMove={this.updateMouseLocation}
                            onLoad={this.onMapLoad}
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
                            {this.renderDrawTools()}
                            {this.renderMouseLocationPanel()}
                        </MapGL>
                    </Col>
                    <Col s={3} className="fh" style={{ flexDirection: 'column' }}>
                        <select
                            className="gridZoomLevelSelect"
                            value={this.value}
                            onChange={this.handleGridZoomLevelSelectChange}
                        >
                            <option value="0">Zoom Level</option>
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                            <option value="9">9</option>
                        </select>
                        <br />
                        {this.renderComposerSidebar()}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ComposerView;
