import './Greetings.css'


const Greetings = ({lang}) =>{
    if (lang==="de") {
        return(
        <h2 className="container-greetings">
            Hallo {lang.children}
        </h2>
        )
    }else if(lang==="fr"){
        return(
        <h2 className="container-greetings">
            Bonjour {lang.children}
        </h2>
        )
    }
}

export default Greetings