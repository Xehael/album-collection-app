import React, { FunctionComponent } from 'react';

type HomeComponentProps = {
}

const HomeComponent: FunctionComponent<HomeComponentProps> = (props: HomeComponentProps) => {
  return (
    <div>
        <h1>Bienvenue dans l'accueil</h1>
    </div>
  );
};

export default HomeComponent;
