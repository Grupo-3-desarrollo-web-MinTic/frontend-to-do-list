import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import foto2 from '../assets/img/foto2.jpg'
const useStyles = makeStyles(()=>({
    root:{
        height:'100vh',
        width:'100vw'
        

    }

}));
function History(props){
    const classes = useStyles();
    return (
        <img alt={'ASD'} src={foto2} className = {classes.root}/>
    );
        
    
}
export default History;