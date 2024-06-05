import React from 'react';
import { Box, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PowerSearchAdd from './PowerSearchAdd';
import SearchIcon from "@mui/icons-material/Search";
//import HtmlTooltip from './components/HtmlTooltip';
import './search.css';

import { Input, Page, setOptions, Select } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';


//Data
// const initialValues = {
//     country: "",
//     place: "",
//     radius: "",
//     radiusUnit: "kilometers", //set km as default unit
//     legalForm: "",
//     legalStatus: "",
//     keywords: "",
//     industrySegment: "",
//     standard: "uksic"
// }

const countryOptions = [
  { text: "英国", value: "united-kingdom" },
  { text: "奥地利", value: "austria" },
  { text: "比利时", value: "belgium" },
  { text: "塞浦路斯", value: "cyprus" },
  { text: "捷克共和国", value: "czech-republic" },
  { text: "丹麦", value: "denmark" },
  { text: "芬兰", value: "finland" },
  { text: "法国", value: "france" },
  { text: "德国", value: "germany" },
  { text: "希腊", value: "greece" },
  { text: "以色列", value: "israel" },
  { text: "卢森堡", value: "luxembourg" },
  { text: "马耳他", value: "malta" },
  { text: "挪威", value: "norway" },
  { text: "波兰", value: "poland" },
  { text: "西班牙", value: "spain" },
  { text: "瑞典", value: "sweden" },
  { text: "瑞士", value: "switzerland" },
]

const legalFormOptions = [
  { text: "公司", value: "corporation" },
  { text: "有限责任公司", value: "limited-liability-company" },
  { text: "普通合伙", value: "general-partnership" },
  { text: "有限合伙制", value: "limited-partnership" },
  { text: "合作社", value: "cooperative" },
  { text: "协会", value: "association" },
  { text: "基础", value: "foundation" },
  { text: "独资", value: "sole-proprietorship" },
]

const statusOptions = [
    { text: "活跃", value: "active" },
    { text: "清算", value: "liquidation" },
    { text: "终止", value: "terminated" },
]

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

export const PowerSearch = () => {

  return (
    <Page>
      <div className="mbsc-grid mbsc-grid-fixed">
        <div className="mbsc-form-group">
          <div className="mbsc-row mbsc-justify-content-center">
            <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
              
              <div className="mbsc-row">
                {/* Country */}
                <div className="mbsc-col-md-4 mbsc-col-12">
                  <div className="field-label">
                    <div className="field-label-content">
                      <span>国家</span>
                          <Tooltip
                            className="tooltip"
                            title={
                              <React.Fragment>
                                {"The fields Country, Place and Radius are explained in the help center article about Geographic Filters."}
                              </React.Fragment>
                            }
                            arrow
                            placement='right'
                          >
                            <InfoOutlinedIcon className='field-label-info' fontSize='10px'/>
                          </Tooltip>
                    </div>
                  </div>
                  <Select  
                  inputStyle='box'
                  placeholder='所有国家'
                  data={countryOptions} />
                </div>
                {/* Place */}
                <div className="mbsc-col-md-4 mbsc-col-12">
                  <div className="field-label">
                    <div className="field-label-content">
                        <span>地区</span>
                    </div>
                  </div>
                  <Input type='address' placeholder='城市/地址/空白' inputStyle='box' />
                </div>
                {/* Radius */}
                <div className="mbsc-col-md-4 mbsc-col-12">
                  <div className="field-label">
                    <div className="field-label-content">
                      <span>范围</span>
                    </div>
                  </div>
                  <Input
                  type='number'
                  placeholder='范围'
                  inputStyle='box'
                  />
                </div>
              </div>

              <div className="mbsc-row">
                {/* Legal Form */}
                <div className="mbsc-col-md-4 mbsc-col-12">
                  <div className="field-label">
                    <div className="field-label-content">
                      <span>法律形式</span>
                    </div>
                  </div>
                  <Select 
                    placeholder='法律形式' 
                    inputStyle='box'
                    data={legalFormOptions} />
                </div>

                {/* Legal Status  */}
                <div className="mbsc-col-md-4 mbsc-col-12">
                  <div className="field-label">
                    <div className="field-label-content">
                      <span>法律地位</span>
                        <Tooltip
                          className="tooltip"
                          title={
                            <React.Fragment>
                              {"请参阅帮助中心关于公司法律地位的文章，了解有效、清算和终止这三个术语的解释。"}
                            </React.Fragment>
                          }
                          arrow
                          placement='right'
                        >
                          <InfoOutlinedIcon className='field-label-info' fontSize='10px'/>
                        </Tooltip>
                      </div>
                  </div>
                  <Select 
                    placeholder='法律地位' 
                    inputStyle='box'
                    data={statusOptions} />
                </div>

                {/* Keywords */}
                <div className="mbsc-col-md-4 mbsc-col-12">
                  <div className="field-label">
                    <div className="field-label-content">
                        <span>关键字</span>
                        <Tooltip
                          className="tooltip"
                          title={
                            <React.Fragment>
                              {"搜索关键字限制搜索在公司名称、公司目的、行业部门或商标中包含一个或多个关键字的公司。"}
                            </React.Fragment>
                          }
                          arrow
                          placement='right'
                        >
                          <InfoOutlinedIcon className='field-label-info' fontSize='10px'/>
                        </Tooltip>
                      </div>
                  </div>
                  <Input type='text' placeholder='搜索关键字' inputStyle='box' />
                </div>
              </div>

              <div className="mbsc-row">
                {/* Industry Segment */}
                <div className="mbsc-col-md-12 mbsc-col-12">
                  <div className="field-label">
                    <div className="field-label-content">
                      <span>行业细分</span>
                      <Tooltip
                        className="tooltip"
                        title={
                          <React.Fragment>
                            {"通过从下拉列表中选择，限制搜索到一个或多个行业的公司。"}
                          </React.Fragment>
                        }
                        arrow
                        placement='right'
                      >
                        <InfoOutlinedIcon className='field-label-info' fontSize='10px'/>
                      </Tooltip>
                    </div>
                  </div>
                  <Input type='text' placeholder='行业细分' inputStyle='box' />
                </div>
              </div>

              <div className="mbsc-row">
                <div className="filter-buttons">
                  <PowerSearchAdd />
                </div>
              </div>
              
              <button className="submit-btn">
                <Box sx={{ display:'flex', alignItems:'center' }}>
                  <SearchIcon className='search-icon' />
                  <h7>提交搜索</h7>
                </Box>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
