import { useState } from 'react'
import './LikeButton.css'


const LikeButton = () =>{
    const [count,setCount] = useState(0)
    const [color, setColor] = useState(0)
    
    const colorsButton = ['purple','blue','green','yellow','orange','red']
    const [colorNum, setColorNum] = useState(colorsButton[color])
    
    function backgroundC() {

        setCount(count + 1)

        if (color === colorsButton.length - 1) {
            setColorNum(colorsButton[0])
            setColor(0)
        }else{
            setColorNum(colorsButton[color + 1])
            setColor(color + 1)
        }
    }
    
    return(
        <button 
        className='button-like' 
        onClick={()=>backgroundC()}
        style={{backgroundColor: colorNum}}
        >{count} Likes</button>
    )

}

export default LikeButton