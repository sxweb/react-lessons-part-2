import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../charDetails';
import ErrorMessage from "../errorMessage";
import GotObjects from '../../services/GotObjects';
import RowBlock from '../rowBlock';




export default class BooksPage extends Component{

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
                getData = {this.GotObjects.getBooks}
                renderItem = {(item) => item.name}/>
        );
        const itemDetails = (
            <ItemDetails
                charId = {this.state.selectedChar}
                getData={this.GotObjects.getBook}
                itemId = {this.state.selectedChar}>
                    <Field fieldName = 'name' label='Name'/>
                    <Field fieldName = 'publisher' label='Publisher'/>
            </ItemDetails>
        );
        return(
            <RowBlock left = {itemList} right={itemDetails} />
        )
    }
}
