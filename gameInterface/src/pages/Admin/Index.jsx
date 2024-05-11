import React , {useContext} from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import Players from './sideBarItems/Players';
import AjouterUtilisateur from './sideBarItems/addPlayerPage';
import Skin from './sideBarItems/Skin';
import Home from './Home';

import Layout from './Layout';
import AddSkin from './sideBarItems/AddSkin';
import AddItem from './sideBarItems/AddItem';
import Item from './sideBarItems/Item';
import BattlePass from './sideBarItems/Battlepass';
import AddBattlepass from './sideBarItems/AddBattlepass';



function Admin() {

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/Players" element={<Layout><Players /></Layout>} />
      <Route path="/addPlayer" element={<Layout><AjouterUtilisateur /></Layout>} />
      <Route path="/skins" element={<Layout><Skin /></Layout>} />
      <Route path="/addskin" element={<Layout><AddSkin /></Layout>} />
      <Route path="/items" element={<Layout><Item /></Layout>} />
      <Route path="/additem" element={<Layout><AddItem /></Layout>} />
      <Route path="/battlepasses" element={<Layout><BattlePass /></Layout>} />
      <Route path="/addbattlepasses" element={<Layout><AddBattlepass /></Layout>} />
    </Routes>
  );
}

export default Admin;