import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from "../characterPage";
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotObjects from '../../services/GotObjects';


export default class App extends Component {

    constructor(){
        super();
        this.switchCharVisibility = this.switchCharVisibility.bind(this);
    }
    GotObjects = new GotObjects();
    state = {
        showChar: true
    }

    switchCharVisibility(){
        this.setState(({showChar}) => ({
            showChar: !showChar
        }))
    }

    render(){

        const char = (this.state.showChar)? <RandomChar/> : null;
        fetch('https://anapioficeandfire.com/api/characters/45')
            .then((res) => res.json())
            .then(json => console.log(json));
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button onClick={this.switchCharVisibility}>Switch Random Char</button>
                        </Col>
                    </Row>
                    <CharacterPage />
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onCharSelected = {this.onCharSelected}
                                getData = {this.GotObjects.getBooks}
                                renderItem = {(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                     </Row>
                     <Row>
                        <Col md='6'>
                            <ItemList 
                                onCharSelected = {this.onCharSelected}
                                getData = {this.GotObjects.getHouses}
                                renderItem = {(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                     </Row>
                </Container>
            </>
        );
    }
};

/*const SwitchButton = () =>{
    return(
        <button onClick={this.switchCharVisibility}>Switch Random Char</button>
    );
}*/