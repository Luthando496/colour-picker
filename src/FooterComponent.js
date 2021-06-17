import React from 'react';


function FooterComponent(props){

    let {paletteName,emoji}= props;

    return(
    <footer className='palatte-footer'>
     {paletteName}
        <span className='emoji'>{emoji}</span>
            {/* {console.log(emoji)} */}
    </footer>
    )
}

export default FooterComponent