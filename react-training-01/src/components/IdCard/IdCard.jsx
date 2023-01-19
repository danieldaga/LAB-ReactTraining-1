import './IdCard.css'
const IdCard =({firstName, lastName, gender, height, picture})=>{
    // new Date(year, month, day)
    return(
    <div className='container'>
        <div className="img-person"><img src={picture} alt=""/></div>
        <div className="data">
            <p>
                <b>First name: </b>{firstName} <br />
                <b>Last name: </b>{lastName}<br />
                <b>gender: </b>{gender}<br />
                <b>height: </b>{height}<br />
                <b>birth: </b>{}
            </p>
        </div>
    </div>
    )
}

export default IdCard