import React ,{Component} from 'react';
// import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import { Link } from 'react-router-dom';




const style ={
    root:{
        backgroundColor:'lightpink',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    container:{
        width:'50%',
        alignItems:'flex-start',
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'column'

        
    },
    nav:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        color:'grey'


    },
    palettes:{
        boxSizing:'border-box',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:'5%'
    }
    
}

class PalatteList extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    goToPalette=(id)=>{
        // console.log(id)
        this.props.history.push(`/palette/${id}`)
    }

    render(){
        const {palettes,classes} = this.props;
        // console.log(palettes)

        return(
            <div className={classes.root}>
                <div className={classes.container} >
                    <nav className={classes.nav}>
                        
                    <h1>Color Picker App</h1>

                    <Link to='palette/new'>
                        <h1>New Palette</h1></Link>
                    </nav>
                    <div className={classes.palettes}>

                    {/* <MiniPalette/> */}

                    {palettes.map(palette=> (
                       <MiniPalette {...palette} handleClickPalette={()=>this.goToPalette(palette.id)} />
                    ))}
                    </div>

                </div>
            </div>
        )
    }
}


export default withStyles(style)(PalatteList);