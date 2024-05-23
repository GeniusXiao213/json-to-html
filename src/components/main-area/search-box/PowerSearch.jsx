import React from 'react';
import { Box, Grid, CardContent, InputLabel, Select, MenuItem, FormControl, Tooltip } from '@mui/material';
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PowerSearchAdd from './PowerSearchAdd';
import SearchIcon from "@mui/icons-material/Search";
//import HtmlTooltip from './components/HtmlTooltip';
import './search.css';


//Data
const initialValues = {
    country: "",
    place: "",
    radius: "",
    legalForm: "",
    legalStatus: "",
    keywords: "",
    industrySegment: "",
}

const countryOptions = [
    { label: "英国", value: "united-kingdom", countryCode: "GB" },
    { label: "奥地利", value: "austria", countryCode: "AT" },
    { label: "比利时", value: "belgium", countryCode: "BE" },
    { label: "塞浦路斯", value: "cyprus", countryCode: "CY" },
    { label: "捷克共和国", value: "czech-republic", countryCode: "CZ" },
    { label: "丹麦", value: "denmark", countryCode: "DK" },
    { label: "芬兰", value: "finland", countryCode: "FI" },
    { label: "法国", value: "france", countryCode: "FR" },
    { label: "德国", value: "germany", countryCode: "DE" },
    { label: "希腊", value: "greece", countryCode: "GR" },
    { label: "以色列", value: "israel", countryCode: "IL" },
    { label: "卢森堡", value: "luxembourg", countryCode: "LU" },
    { label: "马耳他", value: "malta", countryCode: "MT" },
    { label: "挪威", value: "norway", countryCode: "NO" },
    { label: "波兰", value: "poland", countryCode: "PL" },
    { label: "西班牙", value: "spain", countryCode: "ES" },
    { label: "瑞典", value: "sweden", countryCode: "SE" },
    { label: "瑞士", value: "switzerland", countryCode: "CH" },
]

const legalFormOptions = [
  { label: "公司", value: "corporation" },
  { label: "有限责任公司", value: "limited-liability-company" },
  { label: "普通合伙", value: "general-partnership" },
  { label: "有限合伙制", value: "limited-partnership" },
  { label: "合作社", value: "cooperative" },
  { label: "协会", value: "association" },
  { label: "基础", value: "foundation" },
  { label: "独资", value: "sole-proprietorship" },
]

const statusOptions = [
    { label: "活跃", value: "active" },
    { label: "清算", value: "liquidation" },
    { label: "终止", value: "terminated" },
]

export const PowerSearch = () => {

    const onSubmit = (values) => {
        console.log(values)
    }

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item md={12}>
        <Box>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form className='power-search-form'>
                  <CardContent justify="center">
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <div className="field-label">
                          <span>国家</span>
                          {/* <Tooltip
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
                          </Tooltip> */}
                          <InfoOutlinedIcon className='field-label-info' fontSize='10px'/>
                        </div>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="country-label">
                            所有国家
                          </InputLabel>
                          <Select
                            labelId="country-select-label"
                            id="country-select-label"
                            label="所有国家"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.country}
                            name="country">
                            {countryOptions.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <div className="field-label">
                          <span>地区</span>
                        </div>
                        <Field
                          label="城市/地址/空白"
                          type="Address"
                          variant="outlined"
                          fullWidth
                          name="place"
                          value={values.place}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <div className="field-label">
                          <span>范围</span>
                        </div>
                        <Field
                          label="距离"
                          variant="outlined"
                          fullWidth
                          name="radius"
                          value={values.radius}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <div className="field-label">
                          <span>法律形式</span>
                        </div>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="legal-form-label">
                            所有法律形式
                          </InputLabel>
                          <Select
                            labelId="legal-form-label"
                            id="legal-form-select"
                            label="所有法律形式"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.legalForm}
                            name="legalForm">
                            {legalFormOptions.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <div className="field-label">
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
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="legal-status-label">
                            法律地位
                          </InputLabel>
                          <Select
                            labelId="legal-status-select-label"
                            id="legal-status-select"
                            label="法律地位"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.legalStatus}
                            name="legalStatus">
                            {statusOptions.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <div className="field-label">
                          <span>搜索关键字</span>
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
                        <Field
                          label="关键字"
                          variant="outlined"
                          fullWidth
                          name="keywords"
                          value={values.keywords}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <div className="field-label">
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
                        <Field
                          label="行业细分"
                          variant="outlined"
                          fullWidth
                          name="industrySegment"
                          value={values.industrySegment}
                          component={TextField}
                        />
                      </Grid>

                    </Grid>
                  </CardContent>

                  <Grid className='filter-buttons'>
                    <PowerSearchAdd />
                  </Grid>

                  <Grid className='submit-form'>
                    <button
                      className="submit-btn"
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit">
                        <Box sx={{display:'flex',alignItems:'center'}}>

                        <SearchIcon className='search-icon' />
                        <h7 className='submit-btn-text'>提交搜索</h7>
                        </Box>
                    </button>
                  </Grid>

                </Form>
              )
            }}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  )
}