import './IdCard.css'
const IdCard =({firstName, lastName, gender, height, birth,picture})=>{
    return(
    <div className='container'>
        <div className="img-person"><img src={picture} alt="" width='100px'/></div>
        <div className="data">
            <p>
                <span>First name: </span>{firstName} <br />
                <span>Last name: </span>{lastName}<br />
                <span>gender: </span>{gender}<br />
                <span>height: </span>{height}<br />
                <span>birth: </span>{birth}
            </p>
        </div>
    </div>
    )
}

export default IdCard