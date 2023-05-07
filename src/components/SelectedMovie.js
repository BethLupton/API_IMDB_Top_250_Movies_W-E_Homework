import React from 'react';
import './SelectedMovie.css';

const SelectedMovie = ({movie, goBack}) => {
    
    return ( 
        <div>
            <button className='back-button' onClick={goBack}>Back to Top Movies</button>
            <h1 className='font-heading-movies'>{movie.title}</h1>
            <img className='movie-page-image' src={movie["image"]}/>
            <div className='movie-info'>
                <p>Ranking: {movie.rank}/250</p>
                <p>Year of Release: {movie.year}</p>
                <p>Crew: {movie.crew}</p>
                <h4>Rating: {movie.imDbRating}</h4>
            </div>
        </div>
    )
}


export default SelectedMovie;