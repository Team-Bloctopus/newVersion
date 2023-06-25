import React, { useState, useEffect } from 'react';
import './newsfeed.css';
//import bhuj from '../styles/assets/data/bhuj.svg';
import {  useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import DisasterCard from './disasterCard';
const Newsfeed = () =>
{
  const [isLoading, setIsLoading] = useState(false);
        const [newsData, setNewsData] = useState([]);
        const [disasters, setdisasters] = useState([]);
        const { address, contract, getDisasters } = useStateContext();

        const fetchData = async () => {
          try {
            setIsLoading(true);
            const data = await getDisasters();
            setdisasters(data);
            setIsLoading(false);
          } catch (error) {
            console.log("Error fetching news data:", error);
          }
        };
         
        useEffect(() => {
          // Fetch news data from the backend API
        if(contract) fetchData();
          
        }, [address, contract]); 
       // const navigate = useNavigate();

        


    return (
        <div>
           
           {!isLoading && disasters?.length === 0 && (
          <p >
            You have not created any campigns yet
          </p>
        )}

    {!isLoading && disasters?.length > 0 &&
      disasters.map((disaster, i) => (
        <DisasterCard key={i} {...disaster} />
      ))
    }
      </div>
    );
  }
       
export default Newsfeed;