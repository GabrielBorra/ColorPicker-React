import React, {useState } from 'react'
import '../css/index.css'

const ColorPicker = () => {
    
    
     const [color,setColor] = useState('black');
    
   
    return (
        <div class='colorPicker' style={{backgroundColor:color} } >
            <h2 style={{color:'green'}} >Elija un color</h2>
            <input  type="color" id="inputColor" onChange={updatedColor => setColor(updatedColor.target.value)} />
            
        </div>
        
    )
}

export default ColorPicker

