import React from 'react';
import AllRoutines from './AllRoutines';

const Routine = (props) => {
    const routines = props.routines;
    const token = props.token;
    const user = props.user
    return (
        <div> 
            <AllRoutines routines={routines} user={user} token={token}/>
        </div>
    )
}
export default Routine