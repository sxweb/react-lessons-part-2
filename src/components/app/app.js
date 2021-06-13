import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {

    constructor(){
        super();
        this.switchCharVisibility = this.switchCharVisibility.bind(this);
    }

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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
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