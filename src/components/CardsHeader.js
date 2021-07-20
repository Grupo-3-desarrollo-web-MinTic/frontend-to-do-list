import React from 'react';  
import {Card, Typography, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



function CardsHeader(props){
    const useStyles = makeStyles(()=>({
        root:{
            textAlign: 'center'
        },
        texto:{
            fontSize: 18,
            color: props.font
        },
        titulo:{
            fontSize: 22,
            fontWeight: 'bold',
            color: props.font
        },
        prueba:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: props.color
        }
    }));
    const classes = useStyles();
    return (
        <Card style={{"background":"none"}}>
            <CardContent className = {classes.prueba}>
                {props.icono}
                
                <Typography className = {classes.titulo}>
                    {props.titulo}
                </Typography>

                
            </CardContent>
        </Card>
    );
        
    
}
export default CardsHeader;