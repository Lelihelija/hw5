import React from 'react';
import './styles.css';




const Author  = ({name, photo, nickname, content, image, date}) => {
    return (
        <div className="post-wrapper">
            <div className="author">
                <img src={photo} className="logo"></img>
                <div className="text-wrapper">
                    <p className="text"> {name} <span className="nickname-date"> {nickname}  · {date.day} </span><br/> 
                        <span className="content-text">{content.text}</span></p>
                    <div className="img-post-container">
                    <img src={image.src} className="img-post"></img>
                     </div>
                </div>
            </div>

        </div>

    );
};

export default Author;