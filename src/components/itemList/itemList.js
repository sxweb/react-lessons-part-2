import React, {Component} from 'react';
import Spiner from '../spiner';
import './itemList.css';
export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount(){
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }



    renderItems(arr){
        return arr.map((item, i) => {
            return(
                <li key = {item.id} className="list-group-item" onClick={() => this.props.onCharSelected(item.id)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;
        
        if(!itemList){
            return <Spiner />;
        }
        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}