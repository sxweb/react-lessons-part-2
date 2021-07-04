import React, {Component} from 'react';
import Spiner from '../spiner';
import './itemList.css';
import GotObject from "../../services/GotObjects";
class ItemList extends Component {
    renderItems(arr){
        return arr.map((item, i) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return(
                <li key = {id} className="list-group-item" onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const {data} = this.props;
        const items = this.renderItems(data);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = (View, getData) =>{
    return class extends Component {
        state = {
            data: null
        }

        componentDidMount(){
            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
        }
        render(){
            const {data} = this.state;

            if(!data){
                return <Spiner />;
            }
            return <View {...this.props} data = {data}/>;
        }
    }
}
const {getCharacters} = new GotObject();
export default withData(ItemList, getCharacters);