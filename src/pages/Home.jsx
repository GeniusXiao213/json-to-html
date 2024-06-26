import React, { useState, useEffect, useCallback,Routes ,Route, createContext } from 'react';
import { Box, Button, Grid } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import Tips from '../components/main-area/search-box/components/Tips';
import QuickSearchFilter from '../components/main-area/search-box/components/QuickSearchFilter';
import QucikSearchFilterNew from '../components/main-area/search-box/components/QucikSearchFilterNew';
import { PowerSearch } from '../components/main-area/search-box/PowerSearch';
import axios from 'axios';
import './searchRelate.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { companyClickedContext } from '../App';


export const CompanyContext = createContext(null);

function Home() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const apiKey = process.env.REACT_APP_API_KEY;

    //const [isCompanyClicked,setIsCompanyClicked]=useState(companyClickedContext);

    const [input, setInput] = useState(""); //user input 
    const [storeValue,setStoreValue] =useState(""); //fetch data from api based on change of this value
    const [isCompanyClicked,setIsCompanyClicked]=useState(false);
    const [clickedCompany,setClickedCompany] =useState({});
    const [suggestResults, setSuggestResults] = useState([]);  //universal filtering

    const clearInput = () => {
        setInput(""); // Clear the input value
        setIsCompanyClicked(false);
        setSuggestResults([]);
    };
    const [loading,setLoading]=useState(true);

    // const [name,setName]=useState('');
    // const [register,setRegister]=useState('')
    // const [address,setAddress]=useState('')
    // const [corporatePurpose,setCorporatePurpose]=useState('')
    // const [additionalInfo,setAdditionalInfo]=useState('')
    // const [history,setHistory]=useState('')
    // const [network,setNetwork]=useState('')
    // const [publications,setPublications]=useState('')
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

    useEffect(() => {
      const fetchData = async () => {
        try {
            // fetch(`/_api/search/v1/universal?name=${input}&api_key=4Q2Z-GA4E`)
            // .then((response) => response.json())
            // .then(json => {
            //     console.log(json);
            //     setSuggestResults(json);
            // });
            ///_api/search/v1/universal?query=ab&api_key=4Q2Z-GA4E
            const response = await axios.get(`/_api/search/v1/universal?query=${input}&api_key=${apiKey}`); 
            setSuggestResults(response.data.results);
        } catch (error) {
          //console.error('Error fetching searchedCompany:', error);
        }
      };
      if(storeValue!='')
        {
            fetchData();
        }
      }, [storeValue]);

    const handleChange = (value) => {
        setInput(value);
        setStoreValue(value);
        //setSuggestResults([]); //clear history suggestResults
        //fetchData(value);
    };

    const handleCompanyClick=(result) =>{
        //result.name.name && setName(result.name.name);
        //result.address.city && setName(result.address.city);
        //result.name.name && setName(result.name.name);
        //result.name.name && setName(result.name.name);
        //result.name.name && setName(result.name.name);
        //result.name.name && setName(result.name.name);
        //console.log(searchedCompany.address.city);
        setInput(result.company.name.name+', '+result.company.address.formattedValue);
        setIsCompanyClicked(true);
        setClickedCompany(result.company)
        setSuggestResults([]);
    }

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log('enter!')
    // }

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
                position:'relative'
        }}>
            <div class="folded-ribbon">18个国家</div>
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
                                {/* <form onSubmit={handleSubmit} > */}
                                    <Box sx={{display:'flex',width:'100%'}}>

                                            <div className="input-wrapper" >
                                            <SearchIcon className="search-icon" />
                                            {/* Company or Person */}
                                            <input placeholder="公司或个人" value={input} onChange={(e) => handleChange(e.target.value)} />
                                            <ClearIcon className='clear-icon' onClick={clearInput} />
                                            </div>
                                            {/* <Button type="submit" variant="outlined" sx={{height:'inherit',wordBreak:'normal !important',marginLeft:'5px',backgroundColor:'white'}}  >搜索</Button> */}
                                    </Box>
                                {/* </form> */}
                                    <Grid container className='results-dropdown'>
                                        {/* <Grid item xs={2} className='suggestResults-heading'>
                                            <h7>COMPANY</h7>
                                        </Grid> */}
                                        <Grid item xs={12}>
                                            <div className='results-list'>
                                                {
                                                    //if(suggestResults && suggestResults.name){}
                                                    suggestResults.map((result, index) => {
                                                        if (result.company && result.company.name && result.company.address) {
                                                          return (
                                                              <div className='search-result' onClick={() => handleCompanyClick(result)} key={index}>
                                                                  <div className='search-result-name'>{result.company.name.name}</div>
                                                                  <div className='search-result-address'>{result.company.address.formattedValue}</div>
                                                              </div>
                                                          );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{width:'100%',display:'flex',justifyContent:'end'}}>
                                        <QucikSearchFilterNew />
                                    </Box>
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
        <CompanyContext.Provider value={clickedCompany}>
            <Outlet />
        </CompanyContext.Provider>                          
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