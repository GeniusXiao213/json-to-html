import React, { useState } from 'react';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import Popup from 'reactjs-popup';
import './tabs.css';
import { SearchBar } from './quick-search/Search-bar.jsx';
import { PowerSearch } from './power-search/Power-search.jsx';

const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="container">
                <div className="bloc-tabs">
                    <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    
                    onClick={()=> toggleTab(1)}
                    >Quick Search</button>
                    <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    
                    onClick={()=> toggleTab(2)}
                    >Power Search</button>
                    <div className="right-menu">
                        <Popup className='popup' trigger={open => (
                        <TipsAndUpdatesOutlinedIcon className='tips-icon'>
                        </TipsAndUpdatesOutlinedIcon>
                        )} 
                        position="left center"
                        >
                            <h7>Tips & Tricks</h7>
                            <p> Our Help pages <span>Using the quick search</span> and <span>Power Search Overview</span> explain how to use  our search engine.</p>
                           
                        </Popup>
                        
                    </div>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                        <SearchBar />
                    </div>
                    <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                        <PowerSearch />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;