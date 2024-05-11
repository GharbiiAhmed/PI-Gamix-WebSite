import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Profile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index)
  };
  const [user, setUser] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [userBattlePasses, setUserBattlePasses] = useState([]);
  const [userSkins, setUserSkins] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:3000/players/username/${currentUser.decodedToken.username}`);
        setUser(userResponse.data);
        setUpdatedUser(userResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentUser.decodedToken.username]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleUpdateProfile = async () => {
    try {
      await axios.put(`http://127.0.0.1:3000/players/${currentUser.decodedToken.username}`, updatedUser);
      const response = await axios.get(`http://localhost:3000/players/${currentUser.decodedToken.username}`);
      setUser(response.data);
      setUpdatedUser(response.data);
      alert('Profile updated successfully');
    } catch (error) {
      console.log(error);
      alert('Failed to update profile');
    }
  };

  useEffect(() => {
    const getUserBattlePasses = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/battlepasses/getMyBattlePasses/${currentUser.decodedToken.userId}`);
        setUserBattlePasses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserBattlePasses();
  }, [currentUser.decodedToken.userId]);
  console.log(userSkins)
  useEffect(() => {
    const getUserSkins = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/skins/getskinsbyuser/${currentUser.decodedToken.userId}`);
        setUserSkins(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserSkins();
  }, [currentUser.decodedToken.userId]);
  console.log(userSkins)

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-4 mt-4">User Profile</h2>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedUser.username || ''}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={updatedUser.email || ''}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-80"
      >
        Update Profile
      </button>
      <h1 className='pt-8 bold font-bold '>Your puchrase</h1>
      <div className="container mx-auto mt-14">
        <h1 className="section-heading font-bold text-center">Battle passes </h1>
        <Slider {...settings} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userBattlePasses.map((skin) => (
            <div key={skin._id} className="card p-3">
              <div className="card-content">
                <img src='https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg' alt="" />
                <h3 className="card-title">{skin.name}</h3>
                <p className="card-text">{skin.startDate}</p>
                <p className="card-text">{skin.endDate}</p>
                <p className="card-text">{skin.status}</p>
                <p className="card-text">{skin.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto mt-8">
        <h1 className="section-heading font-bold text-center">Skins</h1>
        <Slider {...settings} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userSkins.map((skin, index) => (
            <div key={skin._id} className="card p-3">
              <img src='https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg' alt='' className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{skin.skinName}</h3>
                <p className="card-text">{skin.skinRarity}</p>
                <p className="card-text">{skin.skinPrice}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
}

export default Profile;
