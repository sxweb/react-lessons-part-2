import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousesPage, ItemPage} from "../pages";
import GotObjects from '../../services/GotObjects';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';


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
            <Router>
                <div className="app"> 
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

                        <Route path='/characters' exact component={CharacterPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/houses' exact component={HousesPage}/>
                        <Route path='/books/:id' render={
                            ({match}) =>{
                                const {id} = match.params;
                                return <ItemPage itemId = {id} getData = {this.GotObjects.getBook}/>
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};

/*const SwitchButton = () =>{
    return(
        <button onClick={this.switchCharVisibility}>Switch Random Char</button>
    );
}*/