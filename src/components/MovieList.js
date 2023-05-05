import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = ({movies}) => {
    const movieCards = movies.map((movie, index)=>{
        return (
            <div className='movie-list-movie'>
                <MovieCard movie={movie}/>
            </div>
        )
    })
     return ( 
        <div className='movie-list'>
             {movieCards}
        </div>

        
     );
}
 
export default MovieList;