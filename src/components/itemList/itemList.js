import React, {Component} from 'react';
import GotObjects from '../../services/GotObjects';
import Spiner from '../spiner';
import './itemList.css';
export default class ItemList extends Component {

    state = {
        charList: null
    }

    GotObjects = new GotObjects();
    
    componentDidMount(){
        this.GotObjects.getCharacters()
            .then((charList) => {
                this.setState({
                    charList
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

        const {charList} = this.state;
        
        if(!charList){
            return <Spiner />;
        }
        const items = this.renderItems(charList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}