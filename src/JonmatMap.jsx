import './map.styl';
import React from 'react';
import L from 'leaflet';


export default class JonmatMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        let tile = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
            minZoom: 0,
            maxZoom: 20,
            //detectRetina: true,
            ext: 'png'
        });
        this.map = L.map(this.refs.map, {
            attributionControl: false,
            scrollWheelZoom: false,
            zoomControl: false
        });
        this.map.addLayer(tile);
        let zoom = new L.Control.Zoom({
            position: 'bottomright'
        });
        zoom.addTo(this.map);

        this.map.setZoom(10);
        this.map.setView([37.5207598,126.9209653]);
    }

    render() {
        return (
            <div id="map" className="jonmat-map" ref="map" />
        )
    }
}