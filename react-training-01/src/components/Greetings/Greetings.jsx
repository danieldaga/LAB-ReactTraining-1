import './Greetings.css'


const Greetings = (props) =>{
    if (props.lang==="de") {
        return(
        <h2 className="container-greetings">
            Hallo {props.children}
        </h2>
        )
    }else if(props.lang==="fr"){
        return(
        <h2 className="container-greetings">
            Bonjour {props.children}
        </h2>
        )
    }
}

export default Greetings