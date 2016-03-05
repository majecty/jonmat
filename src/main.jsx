import React from 'react';
import ReactDOM from 'react-dom'
import JonmatMap from 'jonmatmap';
import JonmatList from 'jonmatlist';
import $ from 'jquery';
import 'common.styl';


let host = 'http://localhost:8008/';


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {kind: 'k'},{kind: 'j'},{kind: 'k'},{kind: 'j'},{kind: 'y'},{kind: 'k'},{kind: 'c'},{kind: 'k'},{kind: 'k'},{kind: 'c'},{kind: 'k'},{kind: 'c'}
            ]
        }
    }

    componentDidMount() {
        $.ajax({
            url: 'http://heechan.me:8000/data/',
            success: data => {
                this.setState({
                    items: data['data']
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div id="header">
                    <img id="logo" src="/static/logo.png" />
                    <div id="menu">
                        <ul>
                            <li>소속정당</li>
                            <li>음식종류</li>
                            <li>방문횟수</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <JonmatMap items={this.state.items} />
                </div>
                <div>
                    <JonmatList items={this.state.items} />
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));
