import React, {Component} from 'react';
import GotObjects from '../../services/GotObjects';
import './charDetails.css';

const Field = ({char, fieldName, label}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[fieldName]}</span>
        </li>
    );
}

export {Field}

export default class CharDetails extends Component {
    GotObjects = new GotObjects();
    state = {
        char: null
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
        this.GotObjects.getCharacter(charId)
            .then((char) =>{
                this.setState({char});
            });
    }


    render() {
        if(!this.state.char){
            return <span>Please select an element</span>
        }
        const {char} = this.state;
        const{name} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) =>{
                            return React.cloneElement(child, {char});
                        })
                    }
                </ul>
            </div>
        );
    }
}