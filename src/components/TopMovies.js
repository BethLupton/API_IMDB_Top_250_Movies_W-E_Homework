import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const TopMovies = () => {
    const [topMovies, setTopMovies] = useState()

    useEffect(() => {
        getTopMovies();
    }, [])

    const getTopMovies = function(){
        fetch("https://imdb-api.com/en/API/Top250Movies/k_28w33fo2")
        .then(res => res.json())
        .then(data => setTopMovies(data.items))
    }

    if (!topMovies) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div>Top Movies Container</div>
        <MovieList movies={topMovies}/>
        
        </>
    )
}



export default TopMovies;