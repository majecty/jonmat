import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import {default as ScriptjsLoader} from 'react-google-maps/lib/async/ScriptjsLoader';
import {default as MarkerClusterer} from 'react-google-maps/lib/addons/MarkerClusterer';

export default class JonmatGoogleMap extends React.Component {
	constructor(props) {
	    super(props);

    	this.state = {
        	items: []
    	};
  	}

  	componentWillReceiveProps(props) {
      	this.setState({
			items: props.items
      	});
  	}

	render() {
		const {items} = this.state;

		return (
			<div className="jonmat-map">
				<GoogleMapLoader
				containerElement={<div style={{height: '100%'}} />}
				googleMapElement={
					<GoogleMap defaultZoom={15} defaultCenter={{lat: 37.5207598, lng: 126.9209653}}>
			        	<MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
							{items.map((marker, i) => (
				            	<Marker
				              	position={{lat: marker.location.lat, lng: marker.location.lng}}
				              	key={i} />
				          	))}
				       </MarkerClusterer>
		        	</GoogleMap>
		      		}
		    	/>
			</div>
		);
	}
}
