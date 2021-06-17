import React from 'react';
import {withStyles} from '@material-ui/styles';
// import { colors } from '@material-ui/core';

const styles={
    root:{
        backgroundColor:'white',
        borderRadius:'5px',
        padding:'0.5rem',
        border:'1px solid black',
        position:'relative',
        overflow:'hidden',
        '&:hover':{
            cursor:'pointer'
        }
    },
    colorz:{
        backgroundColor:'grey',
        height:'12vh',
        width:'100%'


    },
    title:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'0',
        color:'black',
        paddingTop:'0.5rem',
        fontSize:'1rem',
        position:'relative'
    },
    emoji:{
        margin:'0.5rem',
        fontSize:'1.5rem'

    },
    miniColor:{
        height:'25%',
        width:'20%',
        display:'inline-block',
        margin:'0 auto',
        position:'relative',
        marginBottom:'-3.5px'
    }
}

function MiniPalette(props){
    const {classes,paletteName,emoji ,colors} = props;
    
    const miniBoxes = colors.map(col => <div className={classes.miniColor} key={col.name} style={{backgroundColor:col.color}} />)

    // console.log(miniBoxes)

    return(
        <div className={classes.root} onClick={props.handleClickPalette}>

            <div className={classes.colorz}>{miniBoxes}</div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}


export default withStyles(styles)(MiniPalette);

