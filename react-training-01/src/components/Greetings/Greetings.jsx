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
    }else if(props.lang==="en"){
        return(
        <h2 className="container-greetings">
            Hello {props.children}
        </h2>
        )
    }else if(props.lang==="es"){
        return(
        <h2 className="container-greetings">
            Hola {props.children}
        </h2>
        )
    }
}

export default Greetings