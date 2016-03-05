import React from 'react';
import ReactDOM from 'react-dom';


class JonmatListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let color = {
            o: '#F9B583',
            j: '#82C9A6',
            c: '#FBEB9D',
            y: '#ACDFF0',
            k: '#F39EB2'
        }[this.props.item.kind];

        let tagLabel = {
            o: '기타',
            j: '일식',
            c: '중식',
            y: '양식',
            k: '한식'
        }[this.props.item.kind];

        return (
            <li style={{
                borderColor: color
            }}>
                <div className="inner">
                    <div className="tag" style={{
                        backgroundColor: color
                    }}>{tagLabel}</div>
                    <div className="info">
                        <div className="shop">스타벅스</div>
                        <div className="address">서울시 종로구</div>
                        <div className="who"><span className="name">김무성</span><span> | </span><span>새누리당</span></div>
                        <div className="price">1,000,000원</div>
                    </div>
                    <div className="count">
                        <div className="num">123<span className="h">회</span></div>
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

    render() {
        let items = this.state.items.map(item => {
            return <JonmatListItem item={item} />
        });

        return (
            <div className="jonmat-list">
                <ul>{items}</ul>
            </div>
        )
    }
}
