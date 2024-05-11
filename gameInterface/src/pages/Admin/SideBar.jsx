import React , {useContext} from 'react';
import { Home, Assessment, Person, Event, ExitToApp , Store , History } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './sideBar.css';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const {logout} = useContext(AuthContext) ;
  const navigate = useNavigate();

  const handleLogout = async (event)=>{
    event.preventDefault();
    window.location.reload(false);
    navigate('/')
    await logout();

   }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              <Link to="/">Home</Link>
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              <Link href="/analystic">Chart</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <Link to="/Players">Players</Link>
            </li>
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <Link to="/battlepasses">BattlePass</Link>
            </li>
            <li className="sidebarListItem">
              <History className="sidebarIcon" />
              <Link href="/Purchase">Purchase </Link>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <Link to="/skins">Skin</Link>
            </li>
            <li className="sidebarListItem">
              <Store className="sidebarIcon" />
              <Link to="/Inventory">Inventory</Link>
            </li>
            <li className="sidebarListItem">
              <Store className="sidebarIcon" />
              <Link to="/items">Item</Link>
            </li>
          </ul>
          <ul className="sidebarList">
            <Link href="/logout">
              <li className="sidebarListItem" onClick={handleLogout}>
                <ExitToApp className="sidebarIcon" />
               <Link to = "/">Logout</Link> 
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;