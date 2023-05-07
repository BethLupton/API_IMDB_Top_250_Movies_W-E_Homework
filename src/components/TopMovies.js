import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { RAW_DATA } from './api-data';

const TopMovies = ({onMovieSelected}) => {
    const [topMovies, setTopMovies] = useState()

    useEffect(() => {
        getTopMovies();
    }, [])

    const getTopMovies = function(){
        fetch("https://imdb-api.com/en/API/Top250Movies/k_28w33fo2")
        .then(res => res.json())
        .then(data => setTopMovies(data.items))

        
        // setTopMovies(JSON.parse(RAW_DATA).items)
    }

    if (!topMovies) {
        return <div>Loading...</div>
    }

    return (
        <>
        <h1 className='font-heading'> IMDB Top 250 Movies</h1>
        <MovieList movies={topMovies} onMovieSelected={onMovieSelected}/>
        
        </>
    )
}



export default TopMovies;