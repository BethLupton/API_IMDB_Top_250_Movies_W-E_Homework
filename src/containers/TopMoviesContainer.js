import React, { useEffect, useState } from 'react';
import TopMovies from '../components/TopMovies';
import SelectedMovie from '../components/SelectedMovie';

const TopMoviesContainer = () => {
    const [selectedMovie, setSelectedMovie] = useState()

    const onTopMoviesClicked = (selectedMovie) => {
        setSelectedMovie(selectedMovie)
    }

    const clearSelectedMovie = () => {
        setSelectedMovie()
    }

    console.log(selectedMovie);
    if (selectedMovie) {
        return (<SelectedMovie movie={selectedMovie} goBack={clearSelectedMovie}/>)
    }

    return (<TopMovies onMovieSelected={onTopMoviesClicked}/>) 
}



export default TopMoviesContainer;