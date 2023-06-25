import React, { useState, useEffect } from 'react';
import './newsfeed.css';
//import bhuj from '../styles/assets/data/bhuj.svg';
import {  useNavigate } from 'react-router-dom';



const DisasterCard = ({title , image , description, scale }) => {
    const navigate = useNavigate();
    const handleClick = () => {
   
        navigate('../Report/Report')
        // Perform additional actions or update component state here
      };
  return (
    <div  className='feed'> <div className='news' onClick={handleClick}>
    <img src={image} alt='bhuj-earthquake'></img>
    <div className='content'>
 <h3>{title}</h3>
    <p>{description}</p>
    </div>
  </div></div>
  )
}

export default DisasterCard