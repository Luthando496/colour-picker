import React, { Component } from "react";
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom'

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state={copied:false}
    }

    changeCopyState=()=>{
        this.setState({copied:true},()=>{
            setTimeout(()=> this.setState({copied:false}),1700) 
        })
    }
    
    render(){

        const{copied} =this.state;

        const {background,moreUrl,name,showLink} = this.props;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div className="ColorBox" style={{background:background}}>
                <div style={{background}} className={`copy-overlay ${copied && 'show'} `}/>
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                   
                </div>
                <div className='copy-container'>
                    <div className="box-content">
                        <span>{name}</span>
                        
                    </div>
                    <button  className='copy-btn'>Copy</button>
                </div>
                {showLink && (
                <Link to={moreUrl} onClick={e=> e.stopPropagation()}>
                <span className='more'>More</span>
                </Link>
                )}
            </div>
            </CopyToClipboard>
        )
    }
}


export default ColorBox
