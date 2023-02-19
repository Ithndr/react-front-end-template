import React, { useState } from 'react';
import UpdateRoutine from './Routine/editRoutine';
import MyRoutines from './MyRoutines';
import { deleteRoutine } from '../api/fetch';

export const Profile = (props) => {
    const token = props.token;
    const user = props.user;
    const routines = props.routines;
    const activities = props.activities;
    const [edit, setEdit] = useState(false);
    const [routineId, setRoutineId] = useState('')
    const handleEdit = (ev, id) => {
        ev.preventDefault()
        console.log(id)
        setRoutineId(id)
        setEdit(!edit)
    }
   console.log(routineId)
    if (!user.username) {
        return <h1>Please log in before viewing profile</h1>
    }
    else {
        return (
            <div>
            <form>
                <div>
                    <h1>{user.username}'s Profile</h1>
                    <div className='myRoutines'>
                        <h2>My Routines</h2>
                        {/* <MyRoutines user={user} activities={activities} /> */}
                        {
                            routines.map((routine) => {
                                if(routine.creatorId === user.id){
                                return <div key={routine.id}>
                                    <h3> Name: {routine.name} </h3>
                                    <p> Goal: {routine.goal} </p>
                                    <p> Activities: {routine.activities.length} </p>
                                    {/* {user.id === routine.creatorId ? <button className='deleteButton' onClick={deleteRoutine(token, routine.id)}>Delete</button>  : null} */}
                                   <div>
                                    {user.id === routine.creatorId ? <button className='editButton' onClick={ev => handleEdit(ev, routine.id)}>Edit</button>  : null}
                                    {edit && routineId === routine.id ? <UpdateRoutine token={token} routineId={routineId}/> : null}
                                    </div>
        
                                </div>
                                }
                            })
                        }
                    </div>
                </div>
            </form>
            </div>
        )
    }
};
