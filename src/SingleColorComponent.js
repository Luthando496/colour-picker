import React,{Component} from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent'

class SingleColorComponent extends Component{
    constructor(props){
        super(props);
        this.state={format:'hex'}
        this._shades = this.gatherShades(this.props.palette,this.props.colorId)
    }
    gatherShades=(palette,colorfilter)=>{
        let shades =[];

        let Allcolors =  palette.colors;

        for(let key in Allcolors){
            shades = shades.concat(Allcolors[key].filter(color=> color.id === colorfilter))
        }

        return shades.slice(1)
    }

    changeFormat=(val)=>{
        this.setState({format:val})
       
    }

    render(){
        let {format} = this.state
        console.log(this.props)
        const {paletteName,emoji} =this.props.palette
        
        const colorShades = this._shades.map(color=> <ColorBox key={color.id} name={color.name} background={color[format]} showLink={false} />)
        return(
            <div className='palett'>
                <Navbar handleChange={this.changeFormat} sliderShowing={false} />
            
            <div className='SingleColorComponent palett-colors'>
                {colorShades}
                {/* <div className='go-back ColorBox'>
                <a href className='back-button'>Go BAck</a>
                </div> */}
            </div>
            <FooterComponent paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default SingleColorComponent;