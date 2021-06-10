import React, {Component} from 'react';
import GotObjects from '../../services/GotObjects';
import Spiner from '../spiner';
import ErrorMessage from '../errorMessage';
import './randomChar.css';

export default class RandomChar extends Component {
    
    constructor(){
        super();
        this.updateCharacter();
    }

    GotObjects = new GotObjects();
    state = {
        char:{},
        loading: true
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });

    }

    onError= (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateCharacter(){
        const id = 4646464;
        this.GotObjects.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error? <ErrorMessage/> : null;
        
        if(loading){
            return <Spiner />
        }
        const spiner = loading ? <Spiner /> : null;
        const content = !(loading || error) ? <View char={char}/> : null;
        return (
            <div className="random-block rounded">
                {errorMessage}
                {spiner}
                {content}
            </div>
        );
    }
}

const View = ({char})=>{

    const {gender, born, died, culture, name} = char;

    return(
        <>
            <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}