import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventIcon from '@material-ui/icons/Event';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import CardsHeader from '../components/CardsHeader';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import SideBar from '../components/SideBar';
const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1,
        

    },
    iconos:{
        color:'white'
    },
    contenedor:{
        paddingLeft: 50,
        paddingRight: 50,

    },
    contenedor2:{
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 10,

    }

}));
function Dashboard(props){
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12} >
                    <Navbar />
                </Grid>
                <Grid container spacing={3} className = {classes.contenedor} >
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  >
                        <CardsHeader   icono = {<CalendarTodayIcon className={classes.iconos}/>}  titulo = "Today"  color="#1c525ad4" font="white"  />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  >
                        <CardsHeader   icono = {<EventIcon className={classes.iconos}/>}  titulo = "Scheduled"  color="#1c525ad4" font="white"  />

                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  >
                        <CardsHeader   icono = {<WorkOutlineOutlinedIcon className={classes.iconos}/>}  titulo = "All"  color="#1c525ad4" font="white"  />

                    </Grid>
                </Grid>
                <Grid style={{"margin-top": "3rem"}}   container xs={12} className = {classes.contenedor2}  >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ "background": "rgb(255 255 255 / 62%)","padding-left":"2rem","padding-top":"1rem"}} >
                            <div style={{"width": "fit-content","border-bottom":"black solid 1px", "padding-bottom":"10px"}} >
                                <h1 style={{"margin": "0px","width": "fit-content",}}>
                                    My Lists
                                </h1>
                            </div>
                            <div style={{ "padding-bottom":"10px","marginTop":"2rem","display":"flex","align-items":"center","height":"3rem"}} >
                                <ListOutlinedIcon />
                                
                                <div style={{"width": "100%","border-bottom":"black solid 1px","margin-left":"2rem","padding-left":"1rem","font-size":"2rem"}}>
                                    Lista 1
                                </div>
                            </div>
                            <div style={{ "padding-bottom":"10px","display":"flex","align-items":"center","height":"3rem"}} >
                                <ListOutlinedIcon />
                                <div style={{"width": "100%","border-bottom":"black solid 1px","margin-left":"2rem","padding-left":"1rem","font-size":"2rem"}}>
                                    Lista 2
                                </div>
                            </div>
                            <div style={{ "padding-bottom":"10px","display":"flex","align-items":"center","height":"3rem"}} >
                                <ListOutlinedIcon />
                                <div style={{"width": "100%","border-bottom":"black solid 1px","margin-left":"2rem","padding-left":"1rem","font-size":"2rem"}}>
                                    Lista 3
                                </div>
                            </div>
                            <div style={{ "padding-bottom":"10px","display":"flex","align-items":"center","height":"3rem"}} >
                                <ListOutlinedIcon />
                                <div style={{"width": "100%","border-bottom":"black solid 1px","margin-left":"2rem","padding-left":"1rem","font-size":"2rem"}}>
                                    Lista 4
                                </div>
                            </div>
                            <div style={{ "padding-bottom":"10px","display":"flex","align-items":"center","height":"3rem"}} >
                                <ListOutlinedIcon />
                                <div style={{"width": "100%","border-bottom":"black solid 1px","margin-left":"2rem","padding-left":"1rem","font-size":"2rem"}}>
                                    Lista 5
                                </div>
                            </div>
                    </Grid>
                </Grid>
                <Grid style={{"margin-top": "3rem"}}   container xs={12} className = {classes.contenedor2}  >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ "padding-left":"2rem","padding-top":"1rem"}} >
                            <div style={{"width": "100%","font-size":"1.6em","font-weight":"bold","display":"flex","align-items":"center","justify-content":"space-evenly","color":"white"}} >
                                <div style={{"background":"#FE6A6B","width":"30vw","display":"flex","align-items":"center","justify-content":"center","height":"6rem"}}>
                                    Add new task
                                </div>
                                <div style={{"background":"#FE6A6B","width":"30vw","display":"flex","align-items":"center","justify-content":"center","height":"6rem"}}>
                                    Add new list
                                </div>
                            </div>
                            
                    </Grid>
                </Grid>
                
            </Grid>
            <SideBar />
        </div>
    );
        
    
}
export default Dashboard;