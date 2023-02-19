import React, {useState} from 'react';
import { createNewRoutine, deleteRoutine, editRoutine } from '../../api/fetch';

const AllRoutines = (props) => {
    const routines = props.routines;
    const user= props.user;
    const token = props.token;
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState('');
    const [routineId, setRoutineId] = useState('')
    return (
       <div className="allRoutines"> 
        <h2> Routines</h2>
        { user.username ? 
            <div className="allRoutines-form"> 
            <form>
             <div className='routine-input'>
                <input
                    placeholder = 'Name'
                    value = {name}
                    onChange = {(ev) => setName(ev.target.value)}
                />
                <input
                    placeholder = 'Goal'
                    value = {goal}
                    onChange = {(ev) => setGoal(ev.target.value)}
                />
                <div>
                <input 
                    type= 'checkbox'
                    value = {isPublic}
                    onChange = {(ev) => setIsPublic(ev.target.checked)}
                />
                <label>Will this routine be public?</label>
                </div>
                </div>
            </form>
            <button onClick = {() => createNewRoutine({token, name, goal, isPublic})}> Create New Routine </button>    
        </div> 
            : null}
    
        {
            routines.map((routine) => {
             return  <div key={routine.id} className="singleRoutine">
                    <h3> Name: {routine.name} </h3> 
                    <p> Creator : {routine.creatorName} </p>
                    <p> Goal: {routine.goal} </p>
                    <p> Activities: {routine.activities.length} </p>
                   {user.id === routine.creatorId ? <button className='deleteButton' onClick={console.log('Delete will happen here')}>Delete</button>: null}
                    {user.id === routine.creatorId ? <button className='editButton' onClick={() => editRoutine({token, name, goal, isPublic})}>Edit</button>: null}  
                </div>
               
            })
        }
       </div>
    )
}

export default AllRoutines;