import React from 'react';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import HtmlTooltip from './HtmlTooltip';
import './tips.css';

function Tips() {
    return (
        <div className="right-menu">
            <HtmlTooltip
                title={
                <React.Fragment>
                    <b>提示和技巧</b>
                    <br />
                    {"我们的帮助页面"}
                    <span className='tooltip-span'>{"使用快速搜索"}</span>
                    {"和"}
                    <span className='tooltip-span'>{"强大的搜索概述"}</span>
                    {"解释了如何使用我们的搜索引擎。"}
                </React.Fragment>
                }
                arrow
                placement='left'
            >
                <TipsAndUpdatesOutlinedIcon className='tips-icon' />
            </HtmlTooltip>
                                
        </div>
     
  
    )
  }
  
  export default Tips