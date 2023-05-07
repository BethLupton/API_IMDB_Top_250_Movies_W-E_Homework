import React from 'react';

const SelectedMovie = ({movie, goBack}) => {

    return ( 
        <div>
            <button onClick={goBack}>Top Movies</button>
            {movie.title}
        </div>
     );
}


export default SelectedMovie;