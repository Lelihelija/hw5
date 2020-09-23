import React, {Component} from "react";
import Author from './author.js'
import './styles.css';

import postImgKageyama from './img/kageyamapost.jpg'
import bokutoPhoto from './img/bokuto.jpg'
import postImgKageyama2 from './img/kageyamaPostImg2.png';
import kurooPhoto from './img/kurooLogo.png';
import kageyamaPhoto from './img/kageyamaLogo.jpg';
import postImgKageyama3 from './img/kageyamaPost3.jpg';


const authors = [
    {
      name: "Бокуто Васильович",
      photo: bokutoPhoto,
      nickname: "@superowl2000@owl.com",
      id:1,
      content: {
        text: 'Дивіться, яке фото в мене на телефоні завалялося!! Ахахахха',
      },
      image: {
        src: postImgKageyama,
      },
      date: {
        day: '1 вересня',
      },
    },
    {
      name: "Куро Іванович",
      photo: kurooPhoto,
      nickname: "@kuroneko@nyan.com",
      id:1,
      content: {
        text: 'Лооол, не в тебе одного! ахах',
      },
      image: {
        src: postImgKageyama2,
      },
      date: {
        day: '2 вересня',
      },
    },
    {
      name: "Кагеяма Панасович",
      photo: kageyamaPhoto,
      nickname: "@bestsetterever@king.com",
      id:1,
      content: {
        text: 'Тільки мені попадіться...',
      },
      image: {
        src: postImgKageyama3,
      },
      date: {
        day: '3 вересня',
      },
    },
];

export default class Posts extends Component {
    

    render() {
        return (
            <div className="posts-wrapper">
            { authors.map((author, index) => <Author key={index} {...author}/>)} 

            </div>
        ) 
    }
}; 