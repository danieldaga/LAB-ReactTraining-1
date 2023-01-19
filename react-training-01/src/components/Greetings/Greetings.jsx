const Greetings = ({lang}) =>{
    if (lang==="de") {
        return(
        <h4 className="container">
            Hallo {lang.children}
        </h4>
        )
    }else if(lang==="fr"){
        return(
            <h4 className="container">
            Bonjour {lang.children}
        </h4>
        )
    }
}

export default Greetings