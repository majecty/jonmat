import 'common.styl';
import React from 'react';
import ReactDOM from 'react-dom'
import JonmatMap from 'jonmatmap';
import JonmatList from 'jonmatlist';
import $ from 'jquery';


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: '://codeforseoul.org/jonmat/static/build/data/restaurant.json',
            success: data => {
                this.setState({
                    items: data['data']
                })
            }
        })
    }

    render() {
        return (
            <div className="app">
                <div id="header">
                    <img className="logo" src="://codeforseoul.org/jonmat/static/logo.png" />
                    <div className="menu">
                        <ul>
                            {/*<li>소속정당</li>*/}
                            {/*<li>음식종류</li>*/}
                            <li>방문횟수</li>
                        </ul>
                    </div>
                </div>
                <div className="jonmat-map-container">
                    <JonmatMap items={this.state.items} />
                </div>
                <div className="jonmat-list-container">
                    <JonmatList items={this.state.items} />
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));
