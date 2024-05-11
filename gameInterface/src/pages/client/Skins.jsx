import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Skins = () => {
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(false);
  const stripePromise = loadStripe('pk_test_51MgRWHEN7H6bO6yf1AzO4x8vcuiUsEuvYG1itnzyYh0dVh77a5nStOPHD2qXNm9MW2BX6LBI0BLdXYqHmVbabEdA003pQsbxcG');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/Skins");
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
        {skins.map((skin) => (
          <div key={skin._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src='https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg' alt="" className="w-full h-56 object-cover object-center" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skin.skinName}</h3>
              <p className="text-gray-600 text-sm">{skin.skinRarity}</p>
              <p className="text-gray-700 font-bold mt-2">${skin.skinPrice}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <Elements stripe={stripePromise}>
                  <CheckoutForm
                    skinId={skin._id}
                    skinName={skin.skinName}
                    skinPrice={skin.skinPrice}
                  />
                </Elements>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skins;
