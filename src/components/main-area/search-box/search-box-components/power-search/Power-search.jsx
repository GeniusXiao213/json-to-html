import React, { useState } from 'react'
import { Box, Grid, Card, CardContent, CardActions, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import './power-search.css'
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-material-ui"


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
    { label: "United Kingdom", value: "united-kingdom" },
    { label: "Austria", value: "austria" },
    { label: "Belgium", value: "belgium" },
    { label: "Cyprus", value: "cyprus" },
    { label: "Czech Republic", value: "czech-republic" },
    { label: "Denmark", value: "denmark" },
    { label: "Finland", value: "finland" },
    { label: "France", value: "france" },
    { label: "Germany", value: "germany" },
    { label: "Greece", value: "greece" },
    { label: "Israel", value: "israel" },
    { label: "Luxembourg", value: "luxembourg" },
    { label: "Malta", value: "malta" },
    { label: "Norway", value: "norway" },
    { label: "Poland", value: "poland" },
    { label: "Spain", value: "spain" },
    { label: "Sweden", value: "sweden" },
    { label: "Switzerland", value: "switzerland" },
]

const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Liquidation", value: "liquidation" },
    { label: "Terminated", value: "terminated" },
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
                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="country-label">
                            Country
                          </InputLabel>
                          <Select
                            labelId="country-select-label"
                            id="country-select-label"
                            label="All Countries"
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
                          label="Place"
                          variant="outlined"
                          fullWidth
                          name="place"
                          value={values.place}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Radius"
                          variant="outlined"
                          fullWidth
                          name="radius"
                          value={values.radius}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Legal Form"
                          variant="outlined"
                          fullWidth
                          name="legalForm"
                          value={values.legalForm}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Legal Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="All"
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
                          label="Search Keywords"
                          variant="outlined"
                          fullWidth
                          name="keywords"
                          value={values.keywords}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Industry Segment"
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
                      Submit Search
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