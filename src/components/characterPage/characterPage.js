import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from "../errorMessage";
import GotObjects from '../../services/GotObjects';

export default class CharacterPage extends Component{
    
    GotObjects = new GotObjects();
    
    state = {
        selectedChar: 130,
        error: false
    }
    

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    onCharSelected = (id) =>{
        this.setState({selectedChar: id});
    }

    render(){
        if(this.state.error){
            return <ErrorMessage />
        }
        return(
            <Row>
                <Col md='6'>
                    <ItemList 
                        onCharSelected = {this.onCharSelected}
                        getData = {this.GotObjects.getCharacters}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId = {this.state.selectedChar}/>
                </Col>
            </Row>
        )
    }
}
