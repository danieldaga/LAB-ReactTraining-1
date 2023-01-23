import { useState } from 'react'
import './LikeButton.css'


const LikeButton = () =>{
    const [count,setCount] = useState(0)
    const [color, setColor] = useState(0)


    const colorsButton = ['purple','blue','green','yellow','orange','red']
    return(
        <button 
        className='button-like' 
        onChange={()=>setColor(color+1)} 
        onClick={()=>setCount(count+1)}
        style={{backgroundColor: colorsButton[count]}}
        >{count} Likes</button>
    )

}

export default LikeButton