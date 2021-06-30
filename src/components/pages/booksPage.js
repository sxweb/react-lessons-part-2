import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from "../errorMessage";
import GotObjects from '../../services/GotObjects';
import {withRouter} from 'react-router-dom';



class BooksPage extends Component{

    GotObjects = new GotObjects();
    state = {
        error: false
    }


    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    render(){
        if(this.state.error){
            return <ErrorMessage />
        }

        return(
            <ItemList
                onItemSelected = {(id) => {
                    this.props.history.push(`/books/${id}`);
                    console.log(id);
                }}
                getData = {this.GotObjects.getBooks}
                renderItem = {(item) => item.name}/>
        )
    }
}

export default withRouter(BooksPage);
