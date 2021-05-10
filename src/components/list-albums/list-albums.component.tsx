import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



type IListAlbumComponentProps = {
}

const ListAlbumComponent: FunctionComponent<IListAlbumComponentProps> = (props: IListAlbumComponentProps) => {
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
        <table>
            {
                albums.map((album: any, index) => (
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>{album.title}</p>
                            </td>
                            <td>
                                <p>{album.description}</p>
                            </td>
                        </tr>
                    </tbody>

                    </Table>

                ))
            }


        </table>
    </Fragment>
  );
};

export default ListAlbumComponent;
