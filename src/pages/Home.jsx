import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import Tips from '../components/main-area/search-box/Tips';
import QuickSearchFilter from '../components/main-area/search-box/Quick-search-filter';
import { PowerSearch } from '../components/main-area/search-box/PowerSearch';
import Introduction from '../components/main-area/text-area/text-area-components/introduction/Introduction';
import Coverage from '../components/main-area/text-area/text-area-components/coverage/Coverage';
import Partner from '../components/main-area/text-area/text-area-components/Partner';
import QuickSearchResultsList from '../components/main-area/search-box/QuickSearchResultsList';



function Home() {

    const [toggleState, setToggleState] = useState(1);
    const [input, setInput] = useState("")
    const [results, setResults] = useState([]);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const clearInput = () => {
        setInput(""); // Clear the input value
        setResults([]);
    };

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
                                    <ClearIcon className='clear-icon' onClick={clearInput} />
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
        <Box sx={{width:'100%',height:'35px !important',backgroundColor:'white !important'}}></Box>
        <Box className='text-area'>
            <Introduction />
            <Coverage />
            <Partner />
        </Box>

      </Box>
    )
  }
  

  export default Home

//   const [filteredCompanies,setfilteredCompanies]=useState([]); //for dropdown
//   const [searchedCompany,setSearchedCompany]=useState({});
//   const [loading,setLoading]=useState(true);
//   const [input,setInput]=useState('');

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


