const DriverCard = ({img, name, rating, car}) => {


    return(
        <div>
            <div className="image-drive"><img src={img} alt={name} className='driver-pilot-img'/></div>
            <div className="driver-pilot">
                <h3 className="name">{name}</h3>
                <p className="rating"></p>
                <p className="car-data">{car.model}-{car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard