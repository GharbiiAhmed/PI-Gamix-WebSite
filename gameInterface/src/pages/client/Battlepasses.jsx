import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFormBP from './CheckoutFormBP';
const stripePromise = loadStripe('pk_test_51MgRWHEN7H6bO6yf1AzO4x8vcuiUsEuvYG1itnzyYh0dVh77a5nStOPHD2qXNm9MW2BX6LBI0BLdXYqHmVbabEdA003pQsbxcG');

const BattlePasses = () => {
  const [battlepasses, setSkins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/BattlePasses");
        setSkins(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const handleBuyClick = async (skinId, skinName, skinPrice) => {
  //   // Implement your buy functionality here
  // };

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {battlepasses.map((skin, index) => (
          <div key={skin._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src='https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg' alt='' className="card-image" />
            <div className="px-6 py-4">
            <h3 className="card-title">{skin.name}</h3>
              <h3 className="card-title">{skin.startDate}</h3>
              <p className="card-text">{skin.endDate}</p>
              <p className="card-text">{skin.status}</p>
              <p className="card-text">{skin.price}</p>
              <Elements stripe={stripePromise}>
                  <CheckoutFormBP
                    skinId={skin._id}
                    name={skin.name}
                    startDate={skin.startDate}
                    endDate={skin.endDate}
                    status={skin.status}
                    price={skin.price}
                  />
                </Elements>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattlePasses;
