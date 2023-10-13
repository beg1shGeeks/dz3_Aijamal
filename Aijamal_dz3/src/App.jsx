import ListOfUser from './assets/Pages/listOfUser/ListOfUser';
import ListOfUsers from './assets/Pages/ListOfUsers/ListOfUsers';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './index.css';
import { useState } from 'react';

const App = () => {
  const navigates = useNavigate();
  const [user, setUser] = useState({});
  const hendelUser = (e) => {
    navigates('/ListOfUser');
    setUser(e);
    // console.log(user);
    // console.log('sdsd');
    // console.log(e);
  };
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ListOfUsers hendelUser={hendelUser} />} />
        <Route path="/ListOfUser" element={<ListOfUser user={user} />} />
      </Route>
    </Routes>
  );
};

export default App;
