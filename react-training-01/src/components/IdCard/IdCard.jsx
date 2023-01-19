const IdCard =({firstName, lastName, gender, height, birth,picture})=>{
    return(
    <div>
        <div className="img-person"><img src={picture} alt="" /></div>
        <div className="data">
            <h4><b>First name: </b>{firstName}</h4><br/>
            <h4><b>Last name: </b>{lastName}</h4><br/>
            <h4><b>gender: </b>{gender}</h4><br/>
            <h4><b>height: </b>{height}</h4><br/>
            <h4><b>birth: </b>{birth}</h4>
        </div>
    </div>
    )
}

export default IdCard