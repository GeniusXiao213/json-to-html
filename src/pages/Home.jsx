import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Tips from '../components/main-area/search-box/Tips';
import QuickSearchFilter from '../components/main-area/search-box/Quick-search-filter';
import { PowerSearch } from '../components/main-area/search-box/Power-search';
import Introduction from '../components/main-area/text-area/text-area-components/introduction/Introduction';
import Coverage from '../components/main-area/text-area/text-area-components/coverage/Coverage';
import Partner from '../components/main-area/text-area/text-area-components/Partner';
import QuickSearchResultsList from '../components/main-area/search-box/QuickSearchResultsList';


function Home() {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        //Insert API link or alternative to fetch data for search
        //Currently using a placeholder for testing
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(json => {
            // console.log(json);
            const results = json.filter((user) => {
                return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            // console.log(results);
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const [results, setResults] = useState([]);

    return (
      <Box className="mainarea">
        <Box className='search-box'
            sx={{
                width: 'fullwidth',
                height: 'fit',
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'center',
                borderRadius: 1,
                bgcolor: '#447c9c',
        }}>
            <Box className='search-box-header' >
            欧洲公司搜索引擎
            </Box>
            <Box className='search-area'>
                <Box className="tabs-bar">
                <div>
                    <div className="container">
                        <div className="bloc-tabs">
                            {/* Quick Search */}
                            <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                            
                            onClick={()=> toggleTab(1)}
                            >快速搜索</button>

                            {/* Power Search */}
                            <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                            
                            onClick={()=> toggleTab(2)}
                            >强力搜索</button>
                            <Tips />
                        </div>
                        <div className="content-tabs">
                            <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                                {/* SearchBar */}
                                <div className='qs-content'>
                                    <div className="input-wrapper" >
                                    <SearchIcon className="search-icon" />
                                    {/* Company or Person */}
                                    <input placeholder="公司或个人" value={input} onChange={(e) => handleChange(e.target.value)} />
                                    </div>
                                    <QuickSearchResultsList results={results}/>
                                    <QuickSearchFilter />
                                </div>
                            </div>
                            <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                                <PowerSearch />
                            </div>
                        </div>
                    </div>
                </div>
                </Box>
            </Box>
        </Box>
        <Box className='text-area'>
            <Introduction />
            <Coverage />
            <Partner />
        </Box>

      </Box>
    )
  }
  
  export default Home