import { useState } from 'react'
import './ClickablePicture.css'


const ClickablePicture = (props) =>{
    const [glasses, setGlasses] = useState("notView")
    

    return(
        <div>
            <img src={props.picture} alt='Alfredo' onClick={() => setGlasses('view')} className='alfredo'></img>
            <img src={props.glasses} alt='glasses' className={glasses} ></img>
        </div>
    )
}

export default ClickablePicture