import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';

import useStyles from './styles'

const CovidCard = ({ bgColor,
    caseName,
    active,
    cases,
    casesPerOneMillion,
    country,
    critical,
    deaths,
    deathsPerOneMillion,
    recovered,
    testsPerOneMillion,
    todayCases,
    todayDeaths,
    totalTests }) => {

    const classes = useStyles();
    const c = bgColor;

    return (
        <>
            <Paper elevation={10} style={{ margin: "auto", backgroundColor: `${c}`, marginBottom: "20px", marginTop: "20px" }}>
                <Typography variant="h6" className={classes.covidCardHeader}> {country} ({caseName})</Typography>
                <Divider />
                <Divider />
                <Typography style={{ padding: "9px" }}> 
                    {caseName} cases: {caseName === "Total" ? 
                        (cases !== 0 &&cases.toLocaleString('en-US')) : (todayCases !== 0 && todayCases.toLocaleString('en-Us'))}
                </Typography>
                <Divider />
                <Typography style={{ padding: "9px" }}> 
                    {caseName} deaths: {caseName === "Total" ? 
                        (deaths!==0 && deaths.toLocaleString('en-Us')) : (todayDeaths!==0 && todayDeaths.toLocaleString('en-US'))}
                </Typography>
                <Divider />
                {caseName === "Total" ? 
                    <Typography style={{ padding: "9px" }}> {caseName} recovered: {(recovered !== 0 && recovered.toLocaleString('en-US'))} </Typography> : null }
            </Paper>
        </>
    )
}
export default CovidCard;
