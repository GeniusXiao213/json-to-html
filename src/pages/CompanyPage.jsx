import React, { useState } from 'react';
import {Box} from '@mui/material';
import '../App.css';
import SearchIcon from "@mui/icons-material/Search";
import Tips from '../components/main-area/search-box/Tips';
import QuickSearchFilter from '../components/main-area/search-box/Quick-search-filter';
import { PowerSearch } from '../components/main-area/search-box/Power-search';
import CompanyTitle from '../components/data-display/data-display-components/CompanyTitle';
import CompanyText from '../components/data-display/data-display-components/CompanyText';

function CompanyPage(name,register,address,additionalInfo,financials,history,network,publications) {
  const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index)
    }

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
                                <div>
                                    <div className="input-wrapper" >
                                    <SearchIcon className="search-icon" />
                                    {/* Company or Person */}
                                    <input placeholder="公司或个人" />
                                    </div>
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
        <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
        <Box className='text-area'>
              <CompanyTitle />
        </Box>
              <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
        <Box className='text-area'>
              <CompanyText />
        </Box>

      </Box>
    )
}

export default CompanyPage