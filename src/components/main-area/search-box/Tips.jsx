import React from 'react';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import Popup from 'reactjs-popup';
import './tips.css';

function Tips() {
    return (
        <div className="right-menu">
            <Popup className='popup' trigger={open => (
                <TipsAndUpdatesOutlinedIcon className='tips-icon'>
                </TipsAndUpdatesOutlinedIcon>
                )} 
                position="left center">
                    {/* Tips and Tricks */}
                    <h7>提示和技巧</h7>
                    <p>我们的帮助页面<span>使用快速搜索</span>和<span>强大的搜索概述</span>解释了如何使用我们的搜索引擎。</p>
                                
            </Popup>
                                
        </div>
     
  
    )
  }
  
  export default Tips