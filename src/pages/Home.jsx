import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Tips from '../components/main-area/search-box/Tips';
import QuickSearchFilter from '../components/main-area/search-box/Quick-search-filter';
import { PowerSearch } from '../components/main-area/search-box/Power-search';
import Introduction from '../components/main-area/text-area/text-area-components/introduction/Introduction';
import Coverage from '../components/main-area/text-area/text-area-components/coverage/Coverage';
import Partner from '../components/main-area/text-area/text-area-components/Partner';
import CompanyTitle from '../components/data-display/data-display-components/CompanyTitle';
import CompanyText from '../components/data-display/data-display-components/CompanyText';
import axios from 'axios';
import './searchRelate.css';

function Home() {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [input, setInput] = useState("");
    const [searchedCompany,setSearchedCompany]=useState({});
    const [results, setResults] = useState([]);
    const [loading,setLoading]=useState(true);

    const [register,setRegister]=useState('')
    const [address,setAddress]=useState('')
    const [corporatePurpose,setCorporatePurpose]=useState('')
    const [additionalInfo,setAdditionalInfo]=useState('')
    const [history,setHistory]=useState('')
    const [network,setNetwork]=useState('')
    const [publications,setPublications]=useState('')
    // const [company,setCompany]=useState({});

    const [introPage,setIntroPage]=useState(true);


    const fetchData = async (value) => {
        try {
          //const response = await axios.get(`http://localhost:5000/data?name=${value}`); 
          const response = await axios.get(`https://euro-search-server-69ddc1dc154d.herokuapp.com/data?name=${value}`); 
          const limitedResults = Array.isArray(response.data) ? response.data.slice(0, 8) : [];
            setResults(limitedResults);
            // console.log('Set result succeeded!', limitedResults);
        } catch (error) {
          console.error('Error fetching searchedCompany:', error);
        }
      };
      //issue: return filter value one change behind input

    const handleChange = (value) => {
        setInput(value);
        setResults([]); //clear history results
        fetchData(value);
    };

    const handleCompanyClick=(result) =>{
        // console.log(result);
        // console.log(result.address.city)
        setSearchedCompany(result.name.name);
        setInput(result.name.name);
        setResults([]);
        // console.log('result:'+results)
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
                                    <Grid container className='results-dropdown'>
                                        {/* <Grid item xs={2} className='results-heading'>
                                            <h7>COMPANY</h7>
                                        </Grid> */}
                                        <Grid item xs={12}>
                                            <div className='results-list'>
                                                {
                                                    results.map((result, index) => {
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
        {(!searchedCompany || introPage) && (
            <>
            <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
            <Box className='text-area'>
                <Introduction />
                <Coverage />
                <Partner />
            </Box>
            </>)}
            {(searchedCompany && !introPage) && (
            <>
            <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
            <Box className='text-area'>
                <CompanyTitle name={searchedCompany}/>
            </Box>
                <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
            <Box className='text-area'>
                {/* <CompanyText name={searchedCompany} /> */}
            </Box>
            </>)}
      </Box>
    )
  }
  

  export default Home

    // const fetchData = (value) => {
    //     //Insert API link or alternative to fetch data for search
    //     //Currently using a placeholder for testing
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then(json => {
    //         // console.log(json);
    //         const results = json.filter((user) => {
    //             return value && user && user.name && user.name.toLowerCase().includes(value);
    //         });
    //         // console.log(results);
    //         setResults(results);
    //     });
    // };

    
    //   useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:3000/data?name=${filterValue}`'); 
    //       setSearchedCompany(response.data);
    //       console.log('set searchedCompany succeed!')
    //     } catch (error) {
    //       console.error('Error fetching searchedCompany:', error);
    //     }
    //   };
    //     fetchData();
    //   }, []);

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