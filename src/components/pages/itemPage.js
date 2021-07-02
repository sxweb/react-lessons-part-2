import React, {Component} from 'react';
import ItemDetails, {Field} from '../charDetails';

export default class ItemPage extends Component{

    render(){
        return(
            <ItemDetails
                getData={this.props.getData}
                itemId = {this.props.itemId}>
                    <Field fieldName = 'name' label='Name'/>
                    <Field fieldName = 'publisher' label='Publisher'/>
            </ItemDetails>
        )
    }
}