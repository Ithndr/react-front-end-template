import React, {useState}from 'react';
import { editRoutine} from '../../api/fetch';

const UpdateRoutine = (props) => {
    const token = props.token 
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState('')
    return (
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
                    onChange = {(ev) => setIsPublic(ev.target.checked)}
                />
                <label>Will this routine be public?</label>
                </div>
            </form>
            <button onClick={editRoutine}> Submit </button>
        </div>
        
    )
    
}

export default UpdateRoutine