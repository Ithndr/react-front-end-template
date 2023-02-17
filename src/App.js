import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from "./components/login"
import { Register } from './components/register';
import { Profile } from './components/profile';
import { fetchUser, getAllRoutines, fetchActivity } from './api/fetch';
import Routine from './components/Routine/index'
import { AllActivity } from './components/activity/viewActivity';

const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRoutines = await getAllRoutines();
      setRoutines(fetchedRoutines);
      const fetchedActivities = await fetchActivity();
      setActivities(fetchedActivities);
    }
    fetchData();
  }, []) 

  useEffect(()=>{
    const exchangeTokenForUser = async ()=>{
      let token = window.localStorage.getItem('token');
      if(token){
        let user = await fetchUser(token);
        setUser(user);
      }
    };
    exchangeTokenForUser();
  }, [token])
  

  return (
    <div>
      <h1 className="container">Fitness Tracker</h1>
      <nav className='navBar'>
        <Link to='/login'>{user.username ? "Log Out" : "Log In"}</Link>
        <Link to='/register'>Register</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/activities'>Activities</Link>
        <Link to= '/routines'>Routines</Link>
      </nav>
      {user.username ? <h3>{`welcome back: ${user.username}`}</h3>:null}
     
      <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser} token={token}  />} />
        <Route path='/register' element={<Register setUser={setUser} setToken={setToken} />} />
        <Route path='/profile' element={<Profile routines={routines} activities={activities} user={user} />}/>
        <Route path='/routines' element = {<Routine routines={routines}/>}/>
        <Route path='/activities' element={<AllActivity activities={activities} />} />
      </Routes>
    </div>
  );
};

export default App;