import React from 'react';
import { Paper, 
    Table, 
    TableBody,  
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow } from '@mui/material';

const columns = [
    // { id: , label: '#', minWidth: 10 },
    { id: 'country', align: 'center', label: 'Country', minWidth: 100 },
    {
        id: 'cases',
        label: 'Total Cases',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'todayCases',
        label: 'New Cases',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'deaths',
        label: 'Today Deaths',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'todayDeaths',
        label: 'New Deaths',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'recovered',
        label: 'Total Recovered',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    // {
    //     id: 'todayRecovered',
    //     label: 'New Recovered',
    //     minWidth: 150,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    // },
    {
        id: 'active',
        label: 'Active Cases',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'critical',
        label: 'Critical Cases',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'casesPerOneMillion',
        label: 'Total Cases/1M',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'deathsPerOneMillion',
        label: 'Deaths/1M',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'totalTests',
        label: 'Total Tests',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'testsPerOneMillion',
        label: 'Tests/1M',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

];

const AllCountryTable = (coronaData) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // const [rowsSearch, setrowsSearch] = React.useState([]);
    // const {country,cases,todayCases,deaths,todayDeaths,recovered,active,critical,casesPerOneMillion,deathsPerOneMillion,totalTests,testsPerOneMillion,} = coronaData;
    var rows = Object.values(coronaData);
    console.log(rows);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // const filterByCountry = (e) => {        
    //     if (searchCountry !== null) {
    //         console.log(rows[10].country )
    //         console.log(searchCountry)
    //         for (var i = 1; i < rows.length; i++) {
    //             if (rows[i].country === searchCountry) {
    //                 console.log(rows[i])
    //                 // rows = [rows[i]];
    //                 var arr =[];
    //                 arr.push(rows[i]);
    //                 setrowsSearch(arr);
    //                 break;
    //             }
    //         }
    //     }
       
    //     console.log(rowsSearch)
    // }

    return (
        <>
            {/* <div style={{ display: 'flex', marginLeft: "5%" }}>
                <TextField id="outlined-basic" placeholder="Search…" variant="outlined" value={searchCountry} onChange={(e) => setsearchCountry(e.target.value)} />
                <Button className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    style={{ width: "100px" }}
                    onClick={filterByCountry}
                >
                    Submit
                </Button>
            </div> */}
            <Paper sx={{ width: '90%', overflow: 'hidden', margin: 'auto' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value !== 0 ?
                                                            (column.format && typeof value === 'number' && value !== 0
                                                            ? column.format(value)
                                                            : value) : ""
                                                        }
                                                        {/* {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value} */}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
export default AllCountryTable;
