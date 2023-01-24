import { useState } from 'react'
import './ClickablePicture.css'


const ClickablePicture = (props) =>{
    const [glasses, setGlasses] = useState("notView")
    
    const showGlasses = () =>{
        if (glasses==='notView') {
            setGlasses('view')
        }else{
            setGlasses('notView')
        }
    }

    return(
        <div>
            <img src={props.picture} alt='Alfredo' onClick={() => showGlasses()} className='alfredo'></img>
            <img src={props.glasses} alt='glasses' onClick={() => showGlasses()} className={glasses} ></img>
        </div>
    )
}

export default ClickablePicture