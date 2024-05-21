import React, { useState, useEffect, useCallback,Routes ,Route } from 'react';
import { Box, Grid } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Tips from '../components/main-area/search-box/Tips';
import QuickSearchFilter from '../components/main-area/search-box/Quick-search-filter';
import { PowerSearch } from '../components/main-area/search-box/Power-search';
import axios from 'axios';
import './searchRelate.css';
import { Outlet, useNavigate } from 'react-router-dom';

function Home() {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [input, setInput] = useState("");
    const [isCompanyClicked,setIsCompanyClicked]=useState(false);
    const [suggestResults, setSuggestResults] = useState([]);  //universal filtering
    const [loading,setLoading]=useState(true);

    const [name,setName]=useState('');
    const [register,setRegister]=useState('')
    const [address,setAddress]=useState('')
    const [corporatePurpose,setCorporatePurpose]=useState('')
    const [additionalInfo,setAdditionalInfo]=useState('')
    const [history,setHistory]=useState('')
    const [network,setNetwork]=useState('')
    const [publications,setPublications]=useState('')
    // const [company,setCompany]=useState({});

    const navigate= useNavigate();

    useEffect(() => {
        if (isCompanyClicked) {
        navigate('/home/companyinfo');
        }
        else{
            navigate('/home/intro');
        }
    }, [isCompanyClicked]);

    // const fetchData = async (value) => {
    //     try {
    //       const response = await axios.get(`http://localhost:5000/data?name=${value}`); 
    //       //const response = await axios.get(`https://euro-search-server-69ddc1dc154d.herokuapp.com/data?name=${value}`); 
    //       const limitedResults = Array.isArray(response.data) ? response.data.slice(0, 8) : [];
    //         setSuggestResults(limitedResults);
    //         // console.log('Set result succeeded!', limitedResults);
    //     } catch (error) {
    //       console.error('Error fetching searchedCompany:', error);
    //     }
    //   };
    // //   //issue: return filter value one change behind input

    useEffect(() => {
      const fetchData = async () => {
        try {
            // fetch(`/_api/search/v1/universal?name=${input}&api_key=4Q2Z-GA4E`)
            // .then((response) => response.json())
            // .then(json => {
            //     console.log(json);
            //     setSuggestResults(json);
            // });
            const response = await axios.get('/_api/company/v1/company?address=Hamburg&name=1000MIKES%20AG&api_key=4Q2Z-GA4E'); 
            console.log(response.data)
            setSuggestResults(response.data);
    //         console.log('set searchedCompany succeed!')
          console.log('set searchedCompany succeed!');
        } catch (error) {
          console.error('Error fetching searchedCompany:', error);
        }
      };
        fetchData();
      }, [input]);

    const handleChange = (value) => {
        setInput(value);
        setSuggestResults([]); //clear history suggestResults
        //fetchData(value);
    };

    const handleCompanyClick=(result) =>{
        // console.log(result);
        // console.log(result.address.city)
        result.name.name && setName(result.name.name);
        result.address.city && setName(result.address.city);
        //result.name.name && setName(result.name.name);
        //result.name.name && setName(result.name.name);
        //result.name.name && setName(result.name.name);
        //result.name.name && setName(result.name.name);
        //console.log(searchedCompany.address.city);
        setInput(result.name.name);
        setIsCompanyClicked(true);
        setSuggestResults([]);
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
                                <div className='qs-content'>
                                    <div className="input-wrapper" >
                                    <SearchIcon className="search-icon" />
                                    {/* Company or Person */}
                                    <input placeholder="公司或个人" value={input} onChange={(e) => handleChange(e.target.value)} />
                                    </div>
                                    <Grid container className='suggestResults-dropdown'>
                                        {/* <Grid item xs={2} className='suggestResults-heading'>
                                            <h7>COMPANY</h7>
                                        </Grid> */}
                                        <Grid item xs={12}>
                                            <div className='suggestResults-list'>
                                                {
                                                    suggestResults.map((result, index) => {
                                                        return (
                                                            <div className='search-result' onClick={() => handleCompanyClick(result)} key={index}>
                                                                <div className='search-result-name'>{result.name.name}</div>
                                                                <div className='search-result-address'>Insert address</div>
                                                            </div>
                                                          );
                                                    })
                                                }
                                            </div>
                                        </Grid>
                                    </Grid>
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
        <Outlet />                          
      </Box>
    )
  }
  

  export default Home



    


    //   const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:3000/data?name=${input}`'); 
    //         setSearchedCompany(response.data);
    //         console.log('set searchedCompany succeed!')
    //       } catch (error) {
    //         console.error('Error fetching searchedCompany:', error);
    //       }
    //     };
    //     console.log(searchedCompany);
    // }