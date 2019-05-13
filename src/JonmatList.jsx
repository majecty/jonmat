import React from 'react';
import Humanize from 'humanize-plus';


class JonmatListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.item;
        let color = {
            '기타': '#F9B583',
            '일식': '#82C9A6',
            '중식': '#FBEB9D',
            '양식': '#ACDFF0',
            '한식': '#F39EB2'
        }[item.kind];

        return (
            <li style={{
                borderColor: color
            }}>
                <div className="inner">
                    <div className="tag" style={{
                        backgroundColor: color
                    }}></div>
                    <div className="info">
                        <div className="shop">{item.name}</div>
                        <div className="address">{item.address}</div>
                        <div className="price">{Humanize.intComma(item.totalPrice)}원</div>
                    </div>
                    <div className="count">
                        <div className="num">{item.times}<span className="h">회</span></div>
                    </div>
                </div>
            </li>
        )
    }
}


export default class JonmatList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items || []
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            items: props.items || []
        })
    }

    render() {
        let items = this.state.items.map((item, i) => {
            return <JonmatListItem key={i} item={item} />
        });

        return (
            <div className="jonmat-list">
                <ul>{items}</ul>
            </div>
        )
    }
}
