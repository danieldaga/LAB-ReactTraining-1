import './CreditCard.css'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    
    return(
        <div className='card-container' style={{ backgroundColor: `${bgColor}`}}>
            <div><img src={type} alt="type" /></div>
            <h3>{number}</h3>
            <div>
                <p>Expires {expirationMonth}/{expirationYear}     {bank}</p>
                <p>{owner}</p>
            </div>

        </div>
    )
}

export default CreditCard