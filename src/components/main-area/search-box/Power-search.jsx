import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, CardActions, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import './power-search.css';
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { GB, AT, BE, CY, CZ, DK, FI, FR, DE, GR, IL, LU, MT, NO, PL, ES, SE, CH } from 'country-flag-icons/react/3x2';


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
    { label: "United Kingdom", value: "united-kingdom", countryCode: "GB" },
    { label: "Austria", value: "austria", countryCode: "AT" },
    { label: "Belgium", value: "belgium", countryCode: "BE" },
    { label: "Cyprus", value: "cyprus", countryCode: "CY" },
    { label: "Czech Republic", value: "czech-republic", countryCode: "CZ" },
    { label: "Denmark", value: "denmark", countryCode: "DK" },
    { label: "Finland", value: "finland", countryCode: "FI" },
    { label: "France", value: "france", countryCode: "FR" },
    { label: "Germany", value: "germany", countryCode: "DE" },
    { label: "Greece", value: "greece", countryCode: "GR" },
    { label: "Israel", value: "israel", countryCode: "IL" },
    { label: "Luxembourg", value: "luxembourg", countryCode: "LU" },
    { label: "Malta", value: "malta", countryCode: "MT" },
    { label: "Norway", value: "norway", countryCode: "NO" },
    { label: "Poland", value: "poland", countryCode: "PL" },
    { label: "Spain", value: "spain", countryCode: "ES" },
    { label: "Sweden", value: "sweden", countryCode: "SE" },
    { label: "Switzerland", value: "switzerland", countryCode: "CH" },
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
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="country-label">
                            国家
                          </InputLabel>
                          <Select
                            labelId="country-select-label"
                            id="country-select-label"
                            label="国家"
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
                        <Field
                          label="地区"
                          variant="outlined"
                          fullWidth
                          name="place"
                          value={values.place}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="范围"
                          variant="outlined"
                          fullWidth
                          name="radius"
                          value={values.radius}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="legal-form-label">
                            法律形式
                          </InputLabel>
                          <Select
                            labelId="legal-form-select-label"
                            id="legal-form-select"
                            label="法律形式"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.legalForm}
                            name="legal-form">
                            {legalFormOptions.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid> 
                      <Grid item xs={12} sm={6} md={6}>
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
                        <Field
                          label="搜索关键字"
                          variant="outlined"
                          fullWidth
                          name="keywords"
                          value={values.keywords}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
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
                  <Grid className='submit-form'>
                    <Button
                      className="submit-button"
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit">
                      提交搜索
                    </Button>
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