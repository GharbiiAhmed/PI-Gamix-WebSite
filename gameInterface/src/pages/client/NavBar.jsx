import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function NavBar() {

  const { logout } = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext);

  const handleLogout = async () => {
    await logout() ;
    window.location.reload(false);
  }

  return (
    <>
    <nav className="bg-gray-800 py-4 h-[70px] justify-center align-center ">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <div>
          <Link to="/" className="text-white text-xl font-bold">Welcome Back {currentUser.decodedToken.username}</Link>
        </div>
        <div className="space-x-4">
          <Link to="/skins" className="text-white hover:text-gray-300">Skins</Link>
          <Link to="/battlepasses" className="text-white hover:text-gray-300">Battle passes</Link>
          <Link to="/profile" className="text-white hover:text-gray-300">Profil</Link>
          <Link to="/" onClick={handleLogout} className="text-white hover:text-gray-300">Deconnexion</Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;