import React from 'react';  

import { makeStyles } from '@material-ui/core/styles';
import  {SideBarData } from './SideBarData.js';
import '../assets/css/SideBar.css'

function SideBar(props){
    const useStyles = makeStyles(()=>({
        sidebar:{
            height:'100%',
            width:250,
            background:'#1c525af2',
            
            
        }
    }));
    const classes = useStyles();
    return (
        <div id="SideBar" className={classes.sidebar}>
            <ul style={{"cursor":"pointer"}}> 
                {SideBarData.map((val, key) =>{
                    return <li key={key} onClick={()=>{
                        window.location.pathname = val.link
                    }}>
                            
                            <div>
                                {val.icon}
                            </div>
                            <div>
                                {val.title}
                            </div>
                        </li>;
                })}
            </ul>
        </div>
    );
        
    
}
export default SideBar;