import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './add-album.style.css';



type IAddAlbumComponentProps = {
}

const AddAlbumComponent: FunctionComponent<IAddAlbumComponentProps> = (props: IAddAlbumComponentProps) => {
    const [albums, setAlbums] = useState<any[]>([]);


    async function getAlbumsFromServer(){
        const callAlbums = await fetch('http://localhost:3002/albums/getAllAlbums');
        const albumsFromServer = await callAlbums.json();
        console.log(albumsFromServer);
        setAlbums(albumsFromServer);
    }

    useEffect(()=> {
        getAlbumsFromServer();
    }, []);
  return (
    <Fragment>
        <Form>
            <Form.Group as={Row} id="bootstrap-overrides" controlId="formBasicTitle">
                <Form.Label column sm={2}>Title</Form.Label>

                <Col sm="10">
                    <Form.Control  placeholder="Enter title" />            
                </Col>
                
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicYear">
                <Form.Label column sm={2}>Year</Form.Label>
                <Col sm="10">
                    <Form.Control placeholder="Enter Year" />
                </Col>

            </Form.Group>
            <Form.Group as={Row} controlId="formBasicCover">
                <Form.Label column sm={2}>Cover</Form.Label>
                <Col sm="10">
                    <Form.Control placeholder="Enter Cover" />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </Fragment>
  );
};

export default AddAlbumComponent;
