import React from 'react';
import ai from '../../../assets/images/card-ai.jpg';
import bigdata from '../../../assets/images/card-bigdata.jpg';
import finicial from '../../../assets/images/card-finicial.jpg';
// import './cards-new.css';

function CardsNew() {
  return (
    <div className="container">
        <div className="card">
            <div className="image">
                <img src={finicial} alt="loading..."/>
            </div>
            <div className="content">
                <h1>大范围数据收集</h1>
                <p>涉及互联网数据信息抓取收集，其数据涵括范围包括欧洲的18个国家、5900万个企业的相关信息，包括企业的股权结构变化轴线图及财务报表等。</p>
            </div>
        </div>
    </div>
  )
}

export default CardsNew