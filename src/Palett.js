import React ,{Component} from 'react';
import ColorBox from './ColorBox';
import FooterComponent from './FooterComponent';


import './Palett.css';
import Navbar from './Navbar';

class Palett extends Component{
    constructor(props){
        super(props);
        this.state={level:100,format:'hex'};
    }

    changlevel = (newlevel)=>{
        this.setState({level:newlevel})
        
    }

    changeFormat=(val)=>{
        this.setState({format:val})
       
    }
    render(){
        const {level} =this.state;
        const {colors,paletteName,emoji,id} = this.props.palatte;
        console.log(id);
    
        let colorBoxs = colors[level].map(color=>(
            <ColorBox background={color[this.state.format]} name={color.name}  key={color.id} id={color.id} showLink={true} moreUrl={`/palette/${id}/${color.id}`}/>
            ))
           colors[level].map(color=> console.log(id,color.id))

        return(
            <div className='palett'>
               
                {/* NAV BAr Goes Here */}
                <Navbar level={level} changlevel={this.changlevel} handleChange={this.changeFormat} sliderShowing={true}/>
                <div className='palett-colors'>
                {colorBoxs}</div>
                
                {/* Footer Eventuelly */}
                <FooterComponent emoji={emoji} paletteName={paletteName} />
              
            </div>
            
        )
    }
}



export default Palett;