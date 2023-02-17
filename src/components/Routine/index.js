import React from 'react';
import AllRoutines from './AllRoutines';

const Routine = (props) => {
    console.log('props:', props)
    const routines = props.routines;
    const token = props.token;
    console.log(token)
    const user = props.user
    return (
        <div> 
            <AllRoutines routines={routines} user={user} token={token}/>
        </div>
    )
}
export default Routine