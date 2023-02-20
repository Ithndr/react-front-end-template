import React, { useEffect, useState } from 'react';
import UpdateRoutine from './Routine/editRoutine';
import MyRoutines from './MyRoutines';
import { deleteRoutine, fetchRoutinesByUser } from '../api/fetch';

export const Profile = (props) => {
    const token = props.token;
    const user = props.user;
    const activities = props.activities;
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [routineId, setRoutineId] = useState('');
    const [myRoutines, setMyRoutines] = useState([]);
    const [deleting, setDeleting] = useState(false)
   // console.log(token)
    //console.log(user)
    const getMyRoutines = async () =>{
        const routines = await fetchRoutinesByUser(token, user.username);
       // console.log(routines)
        setMyRoutines(routines)
    }
    useEffect(() => {
        getMyRoutines();
     
    },[])

    // const deleteRoutines = async () =>{
    //     const deletingRoutine = await deleteRoutine(token, routineId);
    //     console.log(deletingRoutine);
    // }
    // useEffect(()=>{
    //     deleteRoutines();
    // })
    
    const handleEdit = (ev, id) => {
        ev.preventDefault()
        console.log(id)
        setRoutineId(id)
        setEdit(!edit)
    }
    const handleAddActivity = (ev, id) => {
        ev.preventDefault()
        console.log(id)
        setRoutineId(id)
        setAdd(!add)
    }

    const handleDeleteRoutine = (ev, id) => {
        ev.preventDefault()
        setRoutineId(id)
        setDeleting(!deleting)
    }

    if (!user.username) {
        return <h1>Please log in before viewing profile</h1>
    }
    else {
        
        return (
            <div className='profile'>
                <h1>{user.username}'s Profile</h1>
                <div className='myRoutines'>
                    <h2>My Routines</h2>
                    <div>
                    { 
                        myRoutines.map((routine) => {
                            //console.log('this is routine', routine)
                            if (routine.creatorId === user.id) {
                                return <div key={routine.id}>
                                    <h3> Name: {routine.name} </h3>
                                    <p> Goal: {routine.goal} </p>
                                    <p> Activities: {routine.activities.length} </p>
                        
                                    <div>
                                        {user.id === routine.creatorId ? <button className='profile-editButton' onClick={ev => {handleEdit(ev, routine.id)}}>Edit</button> : null}
                                        {edit && routineId === routine.id ? <UpdateRoutine token={token} routineId={routineId} /> : null}
                                    </div>
                                    <div>
                                        {user.id === routine.creatorId ? <button className='profile-addButton' onClick={ev => handleAddActivity(ev, routine.id)}>Add Activity</button> : null}
                                        {add && routineId === routine.id ? <MyRoutines user={user} activities={activities} token={token} routineId={routine.id} /> : null}
                                    </div>
                                    <div>
                                        {/* {user.id === routine.creatorId ? <button className='profile-deleteButton' onClick={ev => handleDeleteRoutine(ev, routine.id)}>Delete </button> : null}
                                        {deleting && routineId === routine.id ? <MyRoutines user={user} activities={activities} token={token} routineId={routineId} /> : null} */}
                                        <button className= 'delete-btn' onClick = { () => deleteRoutine(routineId) }> Delete </button>
                                    </div>
                                </div>
                            }
                        })
                   }
                            </div>
                </div>
            </div>
        )
    }
};
