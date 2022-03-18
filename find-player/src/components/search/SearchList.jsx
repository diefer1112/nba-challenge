import React, { useState, useEffect, memo } from 'react'
import * as axios from 'axios';
import { SearchCard } from './SearchCard';

const baseURLSearch = 'http://127.0.0.1:4000/nba/query'
export const SearchList = memo(({ querySearch }) => {
    const [SearchPlayer, setSearchPlayer] = useState([]);

    useEffect(() => {
        axios.post(baseURLSearch, querySearch).then((response) => {
            setSearchPlayer(response.data);
        });
        console.log('Call player list from backend...');
    }, [querySearch])
    
    return (
        <div className="row rows-cols-1 rows-cols-md-3 g-3">
            {
                !!SearchPlayer &&
                (
                    SearchPlayer.map((search, index) => (
                        <SearchCard key={index}
                            firstName={search.first_name}
                            hInch={search.h_in}
                            hMeters={search.h_meters}
                            lastName={search.last_name}
                        />
                    ))
                )
            }
        </div>
    )
}
)