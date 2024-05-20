import React, { useState } from 'react';
import { Box, Grid, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { TextField } from "formik-material-ui";
import { MdiDeleteCircle } from './deleteCircle';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import './search.css';


//Data
const initialValues = {
    performanceIndicator: "",
    min: "",
    max: "",
    event: "",
    startDate: "",
    endDate: "",
}

const performanceIndicatorOptions = [
    { label: "每位员工的平均工资", value: "average-salaries-per-employee" },
    { label: "基础资本/股本", value: "base-share-capital" },
    { label: "现有现金", value: "cash-on-hand" },
    { label: "材料成本", value: "cost-of-materials" },
    { label: "收益", value: "earnings" },
    { label: "盈利符合年增长率", value: "earnings-cagr" },
    { label: "员工编号", value: "employee-number" },
    { label: "资产净值 ", value: "equity" },
    { label: "股权比例", value: "equity-ratio" },
    { label: "负债", value: "liabilities" },
    { label: "每年公共资金数量", value: "public-fundings-per-year" },
    { label: "每年专利数", value: "patents-per-year" },
    { label: "养老基金条款", value: "pension-provisions" },
    { label: "房地产", value: "real-estate" },
    { label: "应收账款", value: "receiveables" },
    { label: "股本回报率", value: "return-on-equity" },
    { label: "销售回报率", value: "return-on-sales" },
    { label: "收入", value: "revenue" },
    { label: "收入复合年增长率", value: "revenue-cagr" },
    { label: "每位员工的收入", value: "revenue-per-employee" },
    { label: "税收", value: "taxes" },
    { label: "税率", value: "tax-ratio" },
    { label: "总资产", value: "total-assets" },
    { label: "每年公共资金总额", value: "total-public-funding-per-year" },
    { label: "每年的商标数量", value: "trademarks-per-year" },
    { label: "工资和薪金", value: "wages-and-salaries" },
]

const eventOptions = [
    { label: "Address change", value: "address-change" },
    { label: "Annual report", value: "annual-report" },
    { label: "Capital change", value: "capital-change" },
    { label: "Change of control", value: "change-of-control" },
    { label: "Company statute", value: "company-statute" },
    { label: "Continuation", value: "continuation" },
    { label: "Insolvency filing", value: "insolvency-filing" },
    { label: "Insolvency proceedings update", value: "insolvency-froceedings-update" },
    { label: "Legal form change", value: "legal-form-change" },
    { label: "LEI Allocation", value: "lei-allocation" },
    { label: "Liquidation", value: "liquidation" },
    { label: "Management change", value: "management-change" },
    { label: "Merger/Acquisition", value: "merger-acquisition" },
    { label: "Name change", value: "name-change" },
    { label: "Patent", value: "patent" },
    { label: "Public funding", value: "public-funding" },
    { label: "Register change", value: "register-change" },
    { label: "Registration", value: "registration" },
    { label: "Restoration", value: "restoration" },
    { label: "Shareholder agreement", value: "shareholder-agreement" },
    { label: "Termination", value: "termination" },
    { label: "Trademark", value: "trademark" },
]

const PowerSearchAdd = () => {

    const onSubmit = (values) => {
        console.log(values)
    }

    const [piForm, setPiForm] = useState([])
    
  return (
    <div>
        <div className='buttons-div'>
            <div className="performance-indicator-btn">
                <button className='add-section-btn'><span>+ </span>Performance indicator</button>
            </div>
            <div className="event-filter-btn">
                <button className='add-section-btn'><span>+ </span>Event filter</button>
            </div>
        </div>
        <div className="performance-indicator-fields">
            <Grid container justify="center" spacing={1}>
                <Grid item md={12} >
                    <Box>
                        <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}>
                            {({ dirty, isValid, values, handleChange, handleBlur }) => {
                                return (
                                    <Form className='power-search-extra'>

                                        <div className="perf-indicator-extra">
                                            <Grid item container spacing={1} justify="center">
                                            
                                            <Grid item xs={12} sm={12} md={12}>
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel id="performance-indicator-label">
                                                    Performance indicator
                                                </InputLabel>
                                                <Select
                                                    labelId="performance-indicator-label"
                                                    id="performance-indicator-select"
                                                    label="Performance indicator"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.performanceIndicator}
                                                    name="performanceIndicator">
                                                    {performanceIndicatorOptions.map((item) => (
                                                    <MenuItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </MenuItem>
                                                    ))}
                                                </Select>
                                                </FormControl>
                                            </Grid>
                                            
                                            
                                            <Grid item xs={4.5} sm={4.5} md={4.5}>
                                                <Field
                                                label="min"
                                                variant="outlined"
                                                fullWidth
                                                name="min"
                                                value={values.min}
                                                component={TextField}
                                                />
                                            </Grid>

                                            <Grid item xs={1} sm={1} md={1}>
                                                <RemoveOutlinedIcon className='dash'/>
                                            </Grid>

                                            <Grid item xs={4.5} sm={4.5} md={4.5}>
                                                <Field
                                                label="max"
                                                variant="outlined"
                                                fullWidth
                                                name="max"
                                                value={values.max}
                                                component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={2} sm={2} md={2}>
                                                <MdiDeleteCircle className="delete-icon" />
                                            </Grid>    
                                            </Grid>
                                        </div>

                                        <div className="event-extra">
                                            <Grid item container spacing={1} justify="center">
                                                
                                                <Grid item xs={12} sm={12} md={12}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="event-label">
                                                        Event
                                                    </InputLabel>
                                                    <Select
                                                        labelId="event-label"
                                                        id="event-select"
                                                        label="Event"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.event}
                                                        name="event">
                                                        {eventOptions.map((item) => (
                                                        <MenuItem key={item.value} value={item.value}>
                                                            {item.label}
                                                        </MenuItem>
                                                        ))}
                                                    </Select>
                                                    </FormControl>
                                                </Grid>
                                                
                                                
                                                <Grid item xs={4.5} sm={4.5} md={4.5}>
                                                    <Field
                                                    label="Start Date"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="startDate"
                                                    value={values.startDate}
                                                    component={TextField}
                                                    />
                                                </Grid>

                                                <Grid item xs={1} sm={1} md={1}>
                                                    <RemoveOutlinedIcon className='dash'/>
                                                </Grid>

                                                <Grid item xs={4.5} sm={4.5} md={4.5}>
                                                    <Field
                                                    label="End Date"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="endDate"
                                                    value={values.endDate}
                                                    component={TextField}
                                                    />
                                                </Grid>

                                                <Grid item xs={2} sm={2} md={2}>
                                                <MdiDeleteCircle className="delete-icon" />
                                                </Grid>  
                                                </Grid>
                                        </div>
                                        
                                    </Form>
                                )
                            }}

                        </Formik>
                    </Box>
                </Grid>
            </Grid>
        </div>
    </div>
  );
};

export default PowerSearchAdd;