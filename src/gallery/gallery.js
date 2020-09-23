import React, {Component} from "react";
import './styles.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.png';
import image7 from './images/7.jpg';
import image8 from './images/8.png';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';

const imagesArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];



class Gallery extends Component {

    render() {
        return (
            <div className="gallery-wrapper">
                {imagesArray.map((image, index) => {
                    return (
                        <div className="picture-wrapper" key={index}>
                            <img 
                                className="picture"
                                src={image}
                                alt="fullmetal alchemist"/>
                        </div>    
                     ) 
                 })} 
            </div>
        )
    }    
}

export default Gallery;