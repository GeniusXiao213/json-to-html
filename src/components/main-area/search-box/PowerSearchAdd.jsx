import React, { useState } from 'react';
import { Box, Grid, InputLabel, Select, MenuItem, FormControl, Tooltip } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { TextField } from "formik-material-ui";
import { MdiDeleteCircle } from './components/deleteCircle';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './search.css';


//Data
// const initialValues = {
//     performanceIndicator: "",
//     min: "",
//     max: "",
//     event: "",
//     startDate: "",
//     endDate: "",
// }

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
    { label: "地址变更", value: "address-change" },
    { label: "年度报告", value: "annual-report" },
    { label: "资金变更", value: "capital-change" },
    { label: "控制权变更", value: "change-of-control" },
    { label: "公司章程", value: "company-statute" },
    { label: "持续经营", value: "continuation" },
    { label: "破产申请", value: "insolvency-filing" },
    { label: "破产程序更新", value: "insolvency-froceedings-update" },
    { label: "法律形式变更", value: "legal-form-change" },
    { label: "LEI分配", value: "lei-allocation" },
    { label: "清算", value: "liquidation" },
    { label: "管理变革", value: "management-change" },
    { label: "合并/收购", value: "merger-acquisition" },
    { label: "名称改变", value: "name-change" },
    { label: "专利", value: "patent" },
    { label: "公共资助", value: "public-funding" },
    { label: "登记变更", value: "register-change" },
    { label: "登记", value: "registration" },
    { label: "恢复", value: "restoration" },
    { label: "股东协议", value: "shareholder-agreement" },
    { label: "终止", value: "termination" },
    { label: "商标", value: "trademark" },
]

const PowerSearchAdd = () => {

    const [performanceIndicators, setPerformanceIndicators] = useState([]);
    const [events, setEvents] = useState([]);

    const handleAddPerf = () => {
        setPerformanceIndicators([...performanceIndicators, { performanceIndicator:"", min:"", max:"" }]);
    };

    const handleRemovePerf = (index) => {
        const newIndicators = performanceIndicators.filter((_, i) => i !== index);
        setPerformanceIndicators(newIndicators);
    };

    const handleAddEvent = () => {
        setEvents([...events, { event:"", startDate:"", endDate:"" }]);
    };

    const handleRemoveEvent = (index) => {
        const newEvents = events.filter((_, i) => i !== index);
        setEvents(newEvents);
    };

    const onSubmit = (values) => {
        console.log(values)
    }
    
  return (
    <div>
        <div className='buttons-div'>
            <div className="performance-indicator-btn">
                <button className='add-section-btn' onClick={handleAddPerf}><span>+ </span>Performance indicator</button>
            </div>
            <div className="event-filter-btn">
                <button className='add-section-btn' onClick={handleAddEvent}><span>+ </span>Event filter</button>
            </div>
        </div>
        <div className="performance-indicator-fields">
            <Grid container justify="center" spacing={1}>
                <Grid item md={12} >
                    <Box>
                        <Formik
                        initialValues={{
                            performanceIndicators: performanceIndicators,
                            events: events,
                        }}
                        enableReinitialize
                        onSubmit={onSubmit}>
                            {({ values, handleChange, handleBlur }) => {
                                return (
                                    <Form className='power-search-extra'>
                                        {performanceIndicators.map((perf, index) => (
                                            <div className="perf-indicator-extra" key={index}>
                                                <Grid item container spacing={1} justify="center">
                                                
                                                <Grid item xs={12} sm={12} md={12}>
                                                <div className="field-label">
                                                    <span>绩效指标</span>
                                                    <Tooltip
                                                        className="tooltip"
                                                        title={
                                                        <React.Fragment>
                                                            {"这些过滤器的详细信息可以在我们的帮助中心关于Performance Indicator过滤的文章中找到。"}
                                                        </React.Fragment>
                                                        }
                                                        arrow
                                                        placement='right'
                                                    >
                                                        <InfoOutlinedIcon className='field-label-info' fontSize='10px'/>
                                                    </Tooltip>
                                                </div>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id={`performance-indicator-label-${index}`}>
                                                        绩效指标
                                                    </InputLabel>
                                                    <Select
                                                        labelId={`performance-indicator-label-${index}`}
                                                        id={`performance-indicator-select-${index}`}
                                                        label="绩效指标"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.performanceIndicator}
                                                        name={`performanceIndicators[${index}].performanceIndicator`}>
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
                                                    label="最小"
                                                    variant="outlined"
                                                    fullWidth
                                                    name={`performanceIndicators[${index}].min`}
                                                    // value={values.min}
                                                    component={TextField}
                                                    />
                                                </Grid>

                                                <Grid item xs={1} sm={1} md={1}>
                                                    <RemoveOutlinedIcon className='dash'/>
                                                </Grid>

                                                <Grid item xs={4.5} sm={4.5} md={4.5}>
                                                    <Field
                                                    label="最大"
                                                    variant="outlined"
                                                    fullWidth
                                                    name={`performanceIndicators[${index}].max`}
                                                    // value={values.max}
                                                    component={TextField}
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2} md={2}>
                                                    <MdiDeleteCircle className="delete-icon" onClick={() => handleRemovePerf(index)} />
                                                </Grid>    
                                                </Grid>
                                            </div>
                                        ))}

                                        {events.map((event, index) => (
                                            <div className="event-extra" key={index}>
                                            <Grid item container spacing={1} justify="center">
                                                
                                                <Grid item xs={12} sm={12} md={12}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id={`event-label-${index}`}>
                                                        Event
                                                    </InputLabel>
                                                    <Select
                                                        labelId={`event-label-${index}`}
                                                        id={`event-select-${index}`}
                                                        label="Event"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.event}
                                                        name={`events[${index}].event`}>
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
                                                    name={`events[${index}].startDate`}
                                                    //value={values.startDate}
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
                                                    name={`events[${index}].endDate`}
                                                    //value={values.endDate}
                                                    component={TextField}
                                                    />
                                                </Grid>

                                                <Grid item xs={2} sm={2} md={2}>
                                                    <MdiDeleteCircle className="delete-icon" onClick={() => handleRemoveEvent(index)} />
                                                </Grid>  
                                                </Grid>
                                            </div>
                                        ))}
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