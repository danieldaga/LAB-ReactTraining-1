import './IdCard.css'
const IdCard =({firstName, lastName, gender, height, picture, birth})=>{

    return(
    <div className='container'>
        <div className="img-person"><img src={picture} alt=""/></div>
        <div className="data">
            <p>
                <b>First name: </b>{firstName} <br />
                <b>Last name: </b>{lastName}<br />
                <b>gender: </b>{gender}<br />
                <b>height: </b>{height}m<br />
                <b>birth: </b>{birth}
            </p>
        </div>
    </div>
    )
}

export default IdCard