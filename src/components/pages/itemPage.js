import React, {Component} from 'react';
import GotObjects from '../../services/GotObjects';
import ItemDetails, {Field} from '../charDetails';

export default class ItemPage extends Component{
    gotObjects = new GotObjects();

    render(){
        return(
            <ItemDetails
                charId = {this.props.itemId}
                getData={this.gotObjects.getBook}
                itemId = {this.props.itemId}>
                    <Field fieldName = 'name' label='Name'/>
                    <Field fieldName = 'publisher' label='Publisher'/>
            </ItemDetails>
        )
    }
}