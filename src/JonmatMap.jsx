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

    componentWillReceiveProps(props) {
        this.setState({
            items: props.items
        }, () => this.updateLabels());
    }

    updateLabels() {
        this.markers = this.markers || [];
        this.markers.map(marker => this.map.removeLayer(marker));
        this.markers = this.props.items.map(item => {
            let color = {
                '기타': '#F9B583',
                '일식': '#82C9A6',
                '중식': '#FBEB9D',
                '양식': '#ACDFF0',
                '한식': '#F39EB2'
            }[item.kind];

            let icon = L.divIcon({
                className: 'jonmat-icon',
                html: `
                    <div class="jonmat-marker-content" style="border-color: ${color}">
                        ${item.name}
                    </div>
                `
            });

            let marker = L.marker([item.location.lat, item.location.lng], {
                icon: icon
            });

            this.map.addLayer(marker);

            return marker;
        });
    }

    componentDidMount() {
        this.map = L.map(this.refs.map, {
            attributionControl: false,
            scrollWheelZoom: false,
            zoomControl: false
        });

        let zoom = L.control.zoom({
            position: 'bottomleft'
        });

        this.map.addControl(zoom);

        let tile = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
            minZoom: 0,
            maxZoom: 20,
            //detectRetina: true,
            ext: 'png'
        });

        this.map.addLayer(tile);

        this.map.setView([37.5207598,126.9209653], 13);
    }

    render() {
        return (
            <div className="jonmat-map" ref="map" ></div>
        )
    }
}