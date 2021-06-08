import React, {Component} from 'react';
import GotObjects from '../../services/GotObjects';
import './randomChar.css';

export default class RandomChar extends Component {
    
    constructor(){
        super();
        this.updateCharacter();
    }

    GotObjects = new GotObjects();
    state = {
        char:{}
    }

    onCharLoaded = (char) => {
        this.setState({char});
    }

    updateCharacter(){
        const id = Math.floor(Math.random()*140 + 25);
        this.GotObjects.getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {
        const {char:{gender, born, died, culture, name}} = this.state;
        return (
            <div className="random-block rounded">
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
            </div>
        );
    }
}
