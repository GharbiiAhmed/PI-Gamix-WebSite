import React , {useContext} from "react";
import Auth from "./pages/Auth";
import { AuthContext } from './context/authContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from "./pages/Admin/Index";
import Client from "./pages/client/Index"

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Router>
      <Routes>
        {currentUser ? (
          <>
            {currentUser?.decodedToken?.isAdmin === true && <Route path="/*" element={<Admin />} />}
            {currentUser?.decodedToken?.isAdmin === false && <Route path="/*" element={<Client />} />}
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
    <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
