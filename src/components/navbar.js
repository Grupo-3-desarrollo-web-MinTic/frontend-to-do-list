import React from 'react';  
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import '../assets/css/hamburguesa.css';
const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton: {
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen: {
        borderRadius: '50%'
    }
}));

function Navbar(props){
    const classes = useStyles();
    var estilo = false;
    return (
        <div className = {classes.root}>
            <AppBar position="static" style={{"background":"none","color":"black","box-shadow":"none"}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon id="hamburguesa" onClick={()=>{
                        if(estilo === false){
                            estilo = true;
                            document.getElementById("SideBar").style.left = '0px';
                            document.getElementById("hamburguesa").style.left = '250px';
                        }else{
                            estilo = false;
                            document.getElementById("SideBar").style.left = '-250px';
                            document.getElementById("hamburguesa").style.left = '0';

                        }
                    }} />
                    </IconButton>
                    
                    
                </Toolbar>
            </AppBar>
        </div>
    );
        
    
}
export default Navbar;