import React, {Component} from 'react';
import GotObjects from '../../services/GotObjects';
import './charDetails.css';

const Field = ({item, fieldName, label}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[fieldName]}</span>
        </li>
    );
}

export {Field}

export default class ItemDetails extends Component {
    GotObjects = new GotObjects();
    state = {
        item: null
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    updateChar(){
        const {charId} = this.props;
        if(!charId){
            return;
        }
        this.props.getData(this.props.itemId)
            .then((item) =>{
                this.setState({item});
            });
    }


    render() {
        if(!this.state.item){
            return <span>Please select an element</span>
        }
        const {item} = this.state;
        const{name} = this.state.item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) =>{
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </div>
        );
    }
}