import './Carousel.css'
import { useState } from 'react';


const Carousel = ({images}) => {

    const [ImageIndex, setImageIndex] = useState(0);

    const LeftButton = () => {
        if (ImageIndex === 0) {
        setImageIndex(images.length - 1);
        } else {
        setImageIndex(ImageIndex - 1);
        }
    };
    const RightButton = () => {
        if (ImageIndex === images.length - 1) {
        setImageIndex(0);
        } else {
        setImageIndex(ImageIndex + 1);
        }
    };

    return (
        <div>
            <div>
                <img src={images[ImageIndex]} alt=""  className='image-carousel'/>
            </div>
        <div>
            <button onClick={LeftButton} className='button-carousel'>Left</button>
            <button onClick={RightButton} className='button-carousel'>Right</button>
        </div>
        </div>
    );
}


export default Carousel