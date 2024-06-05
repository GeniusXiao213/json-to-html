import React, { useState, useMemo } from 'react';
import { Box, Grid, FormControl, Tooltip } from '@mui/material';
import { Form, Formik } from 'formik';
import { MdiDeleteCircle } from './components/deleteCircle';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './search.css';

import { Input, setOptions, Datepicker, Select, localeZh } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

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
    { text: "每位员工的平均工资", value: "average-salaries-per-employee" },
    { text: "基础资本/股本", value: "base-share-capital" },
    { text: "现有现金", value: "cash-on-hand" },
    { text: "材料成本", value: "cost-of-materials" },
    { text: "收益", value: "earnings" },
    { text: "盈利符合年增长率", value: "earnings-cagr" },
    { text: "员工编号", value: "employee-number" },
    { text: "资产净值 ", value: "equity" },
    { text: "股权比例", value: "equity-ratio" },
    { text: "负债", value: "liabilities" },
    { text: "每年公共资金数量", value: "public-fundings-per-year" },
    { text: "每年专利数", value: "patents-per-year" },
    { text: "养老基金条款", value: "pension-provisions" },
    { text: "房地产", value: "real-estate" },
    { text: "应收账款", value: "receiveables" },
    { text: "股本回报率", value: "return-on-equity" },
    { text: "销售回报率", value: "return-on-sales" },
    { text: "收入", value: "revenue" },
    { text: "收入复合年增长率", value: "revenue-cagr" },
    { text: "每位员工的收入", value: "revenue-per-employee" },
    { text: "税收", value: "taxes" },
    { text: "税率", value: "tax-ratio" },
    { text: "总资产", value: "total-assets" },
    { text: "每年公共资金总额", value: "total-public-funding-per-year" },
    { text: "每年的商标数量", value: "trademarks-per-year" },
    { text: "工资和薪金", value: "wages-and-salaries" },
]

const eventOptions = [
    { text: "地址变更", value: "address-change" },
    { text: "年度报告", value: "annual-report" },
    { text: "资金变更", value: "capital-change" },
    { text: "控制权变更", value: "change-of-control" },
    { text: "公司章程", value: "company-statute" },
    { text: "持续经营", value: "continuation" },
    { text: "破产申请", value: "insolvency-filing" },
    { text: "破产程序更新", value: "insolvency-froceedings-update" },
    { text: "法律形式变更", value: "legal-form-change" },
    { text: "LEI分配", value: "lei-allocation" },
    { text: "清算", value: "liquidation" },
    { text: "管理变革", value: "management-change" },
    { text: "合并/收购", value: "merger-acquisition" },
    { text: "名称改变", value: "name-change" },
    { text: "专利", value: "patent" },
    { text: "公共资助", value: "public-funding" },
    { text: "登记变更", value: "register-change" },
    { text: "登记", value: "registration" },
    { text: "恢复", value: "restoration" },
    { text: "股东协议", value: "shareholder-agreement" },
    { text: "终止", value: "termination" },
    { text: "商标", value: "trademark" },
]

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

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

    const inputProps = useMemo(
        () => ({
        className: 'md-mobile-picker-input',
        placeholder: 'Select the Start and End dates',
        }),
        [],
    );
    
  return (
    <div>
        <div className='buttons-div'>
            <div className="performance-indicator-btn">
                <button className='add-section-btn' onClick={handleAddPerf}><span>+ </span>绩效指标</button>
            </div>
            <div className="event-filter-btn">
                <button className='add-section-btn' onClick={handleAddEvent}><span>+ </span>事件过滤器</button>
            </div>
        </div>
        <div className="performance-indicator-fields">
            <Grid container justify="center" spacing={1}>
                <Grid item sm={14} md={14} >
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
                                                <div className="field-label">
                                                    <div className="field-label-content">
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
                                                </div>
                                                <div className="mbsc-row">
                                                
                                                    <Grid item xs={12} sm={4} md={4}>
                                                        <FormControl fullWidth variant="outlined">
                                                            <Select
                                                                id={`performance-indicator-select-${index}`}
                                                                placeholder="绩效指标"
                                                                inputStyle='box'
                                                                data={performanceIndicatorOptions} />
                                                        </FormControl>
                                                    </Grid>
                                                    
                                                    
                                                    <Grid item xs={4.5} sm={2.5} md={2.5}>
                                                        <Input type='text' placeholder='最小' inputStyle='box' name={`performanceIndicators[${index}].min`} />
                                                    </Grid>

                                                    <Grid item xs={1} sm={1} md={1}>
                                                        <RemoveOutlinedIcon className='dash'/>
                                                    </Grid>

                                                    <Grid item xs={4.5} sm={2.5} md={2.5}>
                                                        <Input type='text' placeholder='最大' inputStyle='box' name={`performanceIndicators[${index}].max`} />
                                                    </Grid>
                                                    <Grid item xs={2} sm={1.5} md={1.43}>
                                                        <MdiDeleteCircle className="delete-icon" onClick={() => handleRemovePerf(index)} />
                                                    </Grid>    
                                                </div>
                                            </div>
                                        ))}

                                        {events.map((event, index) => (
                                            <div className="event-extra" key={index}>
                                                <div className="field-label">
                                                    <div className="field-label-content">
                                                       <span>活动</span> 
                                                    </div>
                                                </div>
                                                <div className="mbsc-row">
                                                    
                                                    <Grid item xs={12} sm={4} md={4}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <Select
                                                            id={`event-select-${index}`}
                                                            placeholder="活动"
                                                            inputStyle='box'
                                                            data={eventOptions} />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={.4} sm={.4} md={.3} />

                                                    <Grid item xs={7} sm={4.5} md={4.5}>
                                                        <div className="md-mobile-picker-header">
                                                            <Datepicker 
                                                                controls={['date']} 
                                                                inputComponent="input" 
                                                                inputProps={inputProps} 
                                                                select="range"
                                                                showRangeLabels={true}
                                                                locale={localeZh}
                                                                // rangeStartLabel="开始日期"
                                                                // rangeEndLabel="结束日期"
                                                                display='anchored'/>
                                                            {/* <Input type='text' placeholder='开始日期' inputStyle='box' name={`events[${index}].startDate`} /> */}
                                                        </div>
                                                    </Grid>

                                                    <Grid item xs={2.5} sm={.85} md={.6} />
                                                    <Grid item xs={2} sm={2} md={2.6}>
                                                        <MdiDeleteCircle className="delete-icon" onClick={() => handleRemoveEvent(index)} />
                                                    </Grid>  
                                            
                                                    
                                                </div>
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