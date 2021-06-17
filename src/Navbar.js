import React ,{Component} from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css' 
import './Navbar.css';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar';
import  IconButton  from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state ={format:'hex',open:false}
    }
    handleChange2=(e)=>{
        this.setState({format:e.target.value,open:true});
        this.props.handleChange(e.target.value)
        

    }
    closeSnakBar=()=>{
        this.setState({open:false})
    }
    render(){
        const {level , changlevel,sliderShowing} = this.props;
        const {format} = this.state;
        console.log(this.props)
        return(
            <header className='Navbar'>
                <div className='logo'>
                    <Link to='/'>Color Picker</Link>
                </div>
                {sliderShowing &&(
                <div className="slider-container">
                    <span>Level:{level}</span>
                <div className='slider'>

                <Slider  min={100} max={900} onAfterChange={changlevel} defaultvalue={level} step={100}/>
                    
                </div>

                </div>
                )}
                <div className='select-container'>
                    <Select value={format} onChange={this.handleChange2}>
                        
                        <MenuItem  value='hex'>HEX- #ffffff</MenuItem>
                        <MenuItem value='rgb'>rgb - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>rgba - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}} open={this.state.open} autoHideDuration={900} message={<span id='message-id'>Format Changed to : {format.toLocaleUpperCase()}</span>} ContentProps={{
                    'aria-describedby':'message-id',
                }}
                onClose={this.closeSnakBar}
                action={[
                    <IconButton onClick={this.closeSnakBar} color='primary'>
                        <CloseIcon />
                    </IconButton>
                ]} />
            </header>
        )
    }
}


export default Navbar;