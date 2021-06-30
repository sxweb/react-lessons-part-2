import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../charDetails';
import ErrorMessage from "../errorMessage";
import GotObjects from '../../services/GotObjects';
import RowBlock from '../rowBlock';




export default class HousesPage extends Component{

    GotObjects = new GotObjects();
    state = {
        selectedChar: 1,
        error: false
    }


    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    onItemSelected = (id) =>{
        this.setState({selectedChar: id});
    }

    render(){
        if(this.state.error){
            return <ErrorMessage />
        }
        const itemList = (
            <ItemList
                onItemSelected = {this.onItemSelected}
                getData = {this.GotObjects.getHouses}
                renderItem = {(item) => item.name}/>
        );
        const itemDetails = (
            <ItemDetails
                getData={this.GotObjects.getHouse}
                itemId = {this.state.selectedChar}>
                <Field fieldName = 'name' label='Name'/>
                <Field fieldName = 'region' label='Region'/>
            </ItemDetails>
        );
        return(
            <RowBlock left = {itemList} right={itemDetails} />
        )
    }
}
