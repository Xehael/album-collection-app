import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
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
                    <tr>
                        <td>
                            <p>{artist.title}</p>
                        </td>
                        <td>
                            <p>{artist.description}</p>
                        </td>
                    </tr>

                ))
            }


        </table>
    </Fragment>
  );
};

export default ListArtistComponent;
