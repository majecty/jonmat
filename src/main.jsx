import 'common.styl';
import React from 'react';
import ReactDOM from 'react-dom'
import JonmatMap from 'jonmatmap';
import JonmatList from 'jonmatlist';


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
		fetch('https://nullfull.github.io/jonmat/static/build/data/restaurant.json')
			.then(response => {
				return response.json()
			}).then(data => {
				this.setState({
					items: data.data
				})
			});
    }

    render() {
        return (
            <div className="app">
                <div id="header">
                    <img className="logo" src="static/logo.png" />
                    <div className="menu">
                        <ul>
                            <li>방문횟수</li>
                        </ul>
                    </div>
                </div>
                <div className="jonmat-list-container">
                    <JonmatList items={this.state.items} />
                </div>
                <div className="jonmat-map-container">
                    <JonmatMap items={this.state.items} />
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));
