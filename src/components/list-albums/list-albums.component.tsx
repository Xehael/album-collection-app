import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TaskStatus } from '../../models/task.model';


type IListAlbumComponentProps = {
}

const ListAlbumComponent: FunctionComponent<IListAlbumComponentProps> = (props: IListAlbumComponentProps) => {
    const [albums, setAlbums] = useState<any[]>([]);


    async function getAlbumsFromServer(){
        const callAlbums = await fetch('http://localhost:3001/tasks/getAllTasks');
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
                    <tr>
                        <td>
                            <p>{album.title}</p>
                        </td>
                        <td>
                            <p>{album.description}</p>
                        </td>
                    </tr>

                ))
            }


        </table>
    </Fragment>
  );
};

export default ListAlbumComponent;
