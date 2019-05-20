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
		fetch('static/build/data/restaurant.json')
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
						<p><a href="https://www.notion.so/Jonmat-8f61b408288d4776b45c1027ae7b4696">데이터 추가</a></p>
						<p><a href="https://docs.google.com/document/u/4/d/e/2PACX-1vQAkut1TTnFA7rJci2o5DvZOsMp-OSKdkh9ibFNM65ypoXEoLQSeWgaTW-0Zzv-OjQWLlB8T6cit5NE/pub">음식점 리뷰</a></p>
                    </div>
                </div>
                <div className="jonmat-list-container">
                    <JonmatList items={this.state.items} />
                </div>
                <div className="jonmat-map-container">
                    <JonmatMap items={this.state.items} />
                </div>
				<div id="footer">
					<p className="stats"><a href="https://www.notion.so/Jonmat-8f61b408288d4776b45c1027ae7b4696">2018년 후원금 사용 금액 상위 6명의 데이터</a></p>
				</div>
            </div>
        )
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));
