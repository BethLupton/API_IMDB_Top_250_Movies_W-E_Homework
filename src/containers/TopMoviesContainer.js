import React, { useEffect, useState } from 'react';
import TopMovies from '../components/TopMovies';
import SearchPage from '../components/SearchPage';

const TopMoviesContainer = () => {
    const [page, setPage] = useState(0)

    const getPage = () => {
        if (page === 0) {
            return (<TopMovies/>)
        }
        if (page === 1) {
            return (<SearchPage/>)
        } 
    }
    
    return (
        <div>
            <button className='buttons' type='button'>Top Movies</button>
            <button className='buttons' type='button'>Search Movies</button>
        </div>
    )
}



export default TopMoviesContainer;