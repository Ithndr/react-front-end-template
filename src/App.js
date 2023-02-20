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
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRoutines = await getAllRoutines();
      setRoutines(fetchedRoutines);
      const fetchedActivities = await fetchActivity();
      setActivities(fetchedActivities);
    }
    fetchData();
  }, [])

  useEffect(() => {
    const exchangeTokenForUser = async () => {
      let windowToken = window.localStorage.getItem('token');
      if (windowToken) {
        setToken(windowToken)
        let user = await fetchUser(token);
        setUser(user);
      }
    };
    exchangeTokenForUser();
  }, [token])

  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
    window.location.reload()
  };
 //console.log("token from app", token)

  return (
    <div>
      <h1 className="container">Fitness Tracker</h1>
      <nav className='navBar'>
        <div className="logout-btn" >
          {user.username ?
            <div>
              <button className='logout-btn' onClick={logout}>Log Out</button>
            </div> :
            <Link to='/login'> Login</Link>}
        </div>

        <Link to='/register'>Register</Link>
        {user.username && (
        <Link to='/profile'>Profile</Link>
        )}
        <Link to='/activities'>Activities</Link>
        <Link to='/routines'>Routines</Link>
      </nav>
      {user.username ? <h3>{`Welcome back: ${user.username}`}</h3> : null}

      <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser} token={token} />} />
        <Route path='/register' element={<Register setUser={setUser} setToken={setToken} />} />
        <Route path='/profile' element={<Profile activities={activities} user={user} token={token} />} />
        <Route path='/routines' element={<Routine routines={routines} token={token} user={user} />} />
        <Route path='/activities' element={<AllActivity activities={activities} token={token} user={user} />} />
      </Routes>
    </div>
  );
};

export default App;