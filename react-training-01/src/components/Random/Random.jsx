import './Random.css'
const Random = ({min, max}) =>{
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return(
        <h2 className='randomNumber'>Random value between {min} and {max} = {randomNumber}</h2>
    )
}

export default Random