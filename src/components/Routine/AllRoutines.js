import React, {useState} from 'react';
import { createNewRoutine, deleteRoutine } from '../../api/fetch';

const AllRoutines = (props) => {
    const routines = props.routines;
    const user= props.user;
    const token = props.token;
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPiblic] = useState('');
    return (
       <div> 
        <h2> Routines</h2>
        { user.username ? 
            <div> 
            <form>
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
                    onChange = {(ev) => setIsPiblic(ev.target.checked)}
                />
                <label>Will this routine be public?</label>
                </div>
            </form>
            <button onClick = {() => createNewRoutine({token, name, goal, isPublic})}> Create New Routine </button>    
        </div> 
            : null}
    
        {
            routines.map((routine) => {
             return  <div key={routine.id}>
                    <h3> Name: {routine.name} </h3> 
                    <p> Creator : {routine.creatorName} </p>
                    <p> Goal: {routine.goal} </p>
                    <p> Activities: {routine.activities.length} </p>
                    {user.id === routine.creatorId ? <button className='deleteButton' onClick={console.log('Delete will happen here')}>Delete</button>: null}
                </div>
               
            })
        }
       </div>
    )
}

export default AllRoutines;