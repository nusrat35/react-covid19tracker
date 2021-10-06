import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import CovidCard from './CovidCard';
import AllCountryTable from './AllCountryTable';

const CovidTracker = () => {
    const [coronaData, setcoronaData] = useState({});
    const [coronaBDData, setcoronaBDData] = useState({});
    const [highestCaseCountry, sethighestCaseCountry] = useState({});
    const [highestDeathCountry, sethighestDeathCountry] = useState({});
    const [loader, setloader] = useState(true)

    const getData = async () => {
        try {
            const apiUrl = 'https://coronavirus-19-api.herokuapp.com/countries';
            const res = await fetch(apiUrl);
            const data = await res.json();
            console.log(data[0]);
            let highestCase = 0;
            var highestCaseData = {};
            let highestDeath = 0;
            var highestDeathData = {};
            for (var i = 1; i < data.length; i++) {
                if (data[i].todayCases > highestCase) {
                    highestCase = data[i].todayCases;
                    highestCaseData = data[i];
                }
                if (data[i].todayDeaths > highestDeath) {
                    highestDeath = data[i].todayDeaths;
                    highestDeathData = data[i];
                }
                if (data[i].country === "Bangladesh") {
                    var coronaBDDatatemp = data[i];
                    // break;
                }
            }
            setcoronaData(data);
            setcoronaBDData(coronaBDDatatemp);
            sethighestCaseCountry(highestCaseData);
            sethighestDeathCountry(highestDeathData);
            setloader(false);

            console.log(coronaBDData);
            console.log(coronaData)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getData();
    }, [])
    if (loader === true) {
        return (
        <Box >
            <CircularProgress />
        </Box>)
    } else {
        return (
            <>
                <div style={{ background: 'rgba(0,128,128, 0.2)', paddingBottom: "30px" }}>
                    <Typography variant="h6" style={{ textAlign: "center", padding: "10px", color: "red" }}>Covid19  Updates</Typography>
                    {/* <Divider className={classes.dividerColor1} /> */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 300,
                                height: 200,
                            },
                            // background: 'rgba(0,128,128, 0.9)'
                        }}
                    >

                        <CovidCard bgColor={"#D8BFD8"} caseName={"Total"} {...coronaData[0]} />
                        <CovidCard bgColor={"#DDA0DD"} caseName={"Today"} {...coronaData[0]} />
                        <CovidCard bgColor={"#ADD8E6"} caseName={"Total"} {...coronaBDData} />
                        <CovidCard bgColor={"#87CEFA"} caseName={"Today"} {...coronaBDData} />


                    </Box>
                    <Typography variant="h6" style={{ textAlign: "center", paddingTop: "12px" }}>Reported Cases and Deaths by Country</Typography>
                    <Typography style={{ textAlign: "center", padding: "8px" }}>
                        The coronavirus <b>COVID-19</b> is affecting
                        <b style={{ color: 'red' }}> {coronaData.length} </b>
                        countries and territories. The day is reset after midnight GMT+0.
                    </Typography>
                    <Typography style={{ textAlign: "center", padding: "8px" }}>
                        Today Highest Covid-19 affected in
                        <b style={{ color: 'red' }}> {highestCaseCountry.country} ({highestCaseCountry.todayCases.toLocaleString('en-US')})</b>
                    </Typography>
                    <Typography style={{ textAlign: "center", padding: "8px" }}>
                        Today Highest Covid-19 deaths in
                        <b style={{ color: 'red' }}> {highestDeathCountry.country} ({highestDeathCountry.todayDeaths.toLocaleString('en-US')})</b>
                    </Typography>

                    <AllCountryTable {...coronaData} />
                </div>
            </>
        )
    }
}
export default CovidTracker;
