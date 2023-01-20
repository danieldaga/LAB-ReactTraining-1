import './BoxColor.css'
const BoxColor = ({r, g, b}) =>{
    // const ColorToHex=(color)=>{
    //     let hexadecimal = color.toString(16)
    //     return hexadecimal
    // }
    // const ConvertRGBtoHex = (r,g,b)=>{
    //     // let Hexa = '#' + ColorToHex(r) + ColorToHex(g) + ColorToHex(b) 
    //     return (ColorToHex(r) + ColorToHex(g) + ColorToHex(b));
    // }
    return (
        <div className="color-box" style={{backgroundColor:`rgb(${r},${g},${b})`}}>
            rgb({r},{g},{b})
        </div>
    )
}


export default BoxColor