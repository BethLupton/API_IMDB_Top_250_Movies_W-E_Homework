import React from 'react';
import './StarRanking.css';

const StarRanking = ({rank}) => {
    return ( 
        <div className='star'>{rank}</div>
     );
}
 
export default StarRanking;