import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './pagestyle.css';

const Music = () => {
    return (
        <div className="page">
            <h1>Music</h1>
            <InputGroup>
                <FormControl  className="m-auto"  placeholder="Search by song, artist, or album"/>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default Music;