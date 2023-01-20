import './RandomBoxColor.css'
const RandomBoxColor = () =>{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return(
        <div className="random-color" style={{backgroundColor:`rgb(${r},${g},${b})`}}>
            rgb({r},{g},{b})
        </div>
    )
}
export default RandomBoxColor