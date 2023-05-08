import React from 'react';
import './SelectedMovie.css';

const SelectedMovie = ({movie, goBack}) => {
    
    return ( 
        <div>
            <button className='back-button' onClick={goBack}>Back to Top Movies</button>
            <h1 className='font-heading-movies'>{movie.title}</h1>
            <img className='movie-page-image' src={movie["image"]}/>
            <div className='movie-info'>
                <p><b>Ranking:</b> {movie.rank}</p>
                <p><b>Year of Release:</b> {movie.year}</p>
                <p><b>Crew:</b> {movie.crew}</p>
                <p><b>Rating:</b> {movie.imDbRating}</p>
            </div>
        </div>
    )
}


export default SelectedMovie;