import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from "../errorMessage";
import GotObjects from '../../services/GotObjects';
import RowBlock from '../rowBlock';




export default class CharacterPage extends Component{
    
    GotObjects = new GotObjects();
    state = {
        selectedChar: 130,
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
            <ItemList  onItemSelected = {this.onItemSelected}
                        getData = {this.GotObjects.getCharacters}
                        renderItem = {({name, gender, id}) => `${name} (${gender})`}/>
        );
        const charDetails = (
            <CharDetails charId = {this.state.selectedChar}>
                <Field fieldName = 'gender' label='Gender'/>
                <Field fieldName = 'born' label='Born'/>
                <Field fieldName = 'died' label='Died'/>
                <Field fieldName = 'culture' label='Culture'/>
            </CharDetails>
        );
        return(
            <RowBlock left = {itemList} right={charDetails} />
        )
    }
}
