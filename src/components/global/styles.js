import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    dividerColor1: {
        background: 'rgb(0,128,128)',
        height:'2px',
        marginBottom: "20px",
        marginLeft:"80px",
        marginRight:'80px'
    },
    covidCardHeader:{
        textAlign:"center",padding:"8px",
    },
    covidStat: { 
        textAlign: "center", 
        paddingTop: "8px", 
        paddingBottom:"8px", 
        backgroundColor:'RGB(0,128,128)' ,
        width: '90%',
        margin:'auto',
        marginTop:'20px',
        color:'white'}
}));
