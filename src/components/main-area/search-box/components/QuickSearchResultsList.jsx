import React from 'react';
import './quickSearchResultsList.css';
import SearchResult from '../SearchResult'
import { Grid } from '@mui/material';

const QuickSearchResultsList = ({ results }) => {
  return (
    <Grid container className='results-dropdown'>
        {/* <Grid item xs={2} className='results-heading'>
            <h7>COMPANY</h7>
        </Grid> */}
        <Grid item xs={12}>
            <div className='results-list'>
                {
                    results.map((result, id) => {
                        return <SearchResult result={result} key={id}/>
                    })
                }
            </div>
        </Grid>
    </Grid>
  );
};

export default QuickSearchResultsList