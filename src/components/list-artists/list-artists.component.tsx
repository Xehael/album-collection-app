import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



type IListArtistComponentProps = {
}

const ListArtistComponent: FunctionComponent<IListArtistComponentProps> = (props: IListArtistComponentProps) => {
    const [artists, setArtists] = useState<any[]>([]);


    async function getArtistsFromServer(){
        const callArtists = await fetch('http://localhost:3002/artists/getAllArtists');
        const artistsFromServer = await callArtists.json();
        console.log(artistsFromServer);
        setArtists(artistsFromServer);
    }

    useEffect(()=> {
        getArtistsFromServer();
    }, []);
  return (
    <Fragment>
        <table>
            {
                artists.map((artist: any, index) => (
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>isBand</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>{artist.name}</p>
                            </td>
                            <td>
                                <p>{artist.isBand}</p>
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

export default ListArtistComponent;
