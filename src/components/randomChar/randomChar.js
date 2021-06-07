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
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    updateCharacter(){
        const id = 130;
        this.GotObjects.getCharacter(id)
            .then(char =>{
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    born: char.born,
                    died: char.died,
                    culture: char.culture
                })
            })
    }

    render() {
        const {gender, born, died, culture, name} = this.state;
        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{gender} </span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{born} </span>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{died} </span>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{culture} </span>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </div>
        );
    }
}
