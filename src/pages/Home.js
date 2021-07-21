import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './pagestyle.css';

const Home = () => {
    return (
        <div className="page">
            <h1>Home</h1>
            <InputGroup>
                <FormControl  className="m-auto"  placeholder="Search for Music and Videos here"/>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default Home;