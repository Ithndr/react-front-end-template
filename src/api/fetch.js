//Base url for using in all fetches
const url = 'http://fitnesstrac-kr.herokuapp.com/api'


//FETCH FOR USERS LOGIN AND REGISTER --------------
const fetchLogin = async (username, password) => {
    try {
        const response = await fetch(`${url}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const result = await response.json();
        //console.log("login result",result);
        return result;
    } catch (error) {
        console.error(error)
    }
}
const fetchUser = async (token) => {
    try {
        const response = await fetch(`${url}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}

const fetchRegister = async (username, password) => {
    try {
        const response = await fetch(`${url}/users/register`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
//----------------------------------------------------------

//FETCH FOR GETTING ALL ROUTINES AND ACTIVITIES-------------
const getAllRoutines = async () => {
    try {
        const response = await fetch(`${url}/routines`);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error)
    }
}
const fetchRoutinesByUser = async (token, username) =>{
    try{
        if(token){
            const response = await fetch(`${url}/users/${username}/routines`, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
            });
            const result = await response.json();
            //console.log(result)
            return result;
          } else {
            const response = await fetch(`${url}/users/${username}/routines`, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            const result = await response.json();
            console.log(result)
            return result;
          }
    }catch(error){
        console.error(error)
    }

}
const fetchActivity = async () => {
    try {
        const response = await fetch(`${url}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
//------------------------------------------------------------

//FETCH FOR CREATING ROUTINES AND ACTIVITIES------------------
const createNewRoutine = async ({token, name, goal, isPublic}) => {
    try { const response = await fetch(`${url}/routines`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: isPublic
        })
      })
        const result = await response.json();
       return result
    } catch (error) {
        console.error(error)
    }
}

const createNewActivity = async ({token, name, description}) => {
    try { const response = await fetch(`${url}/activities`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description
        })
      })
        const result = await response.json();
       return result
    } catch (error) {
        console.error(error)
    }
}
//--------------------------------------------------------

//FETCH FOR DELTEING ROUTINES AND ACTIVITIES--------------
const deleteRoutine  = async({token, routineId}) =>{
    try{
        const response = await fetch(`${url}/routines/${routineId}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        const result = response.json();
        return result;
    }catch(error){
        console.error(error)
    }
}

const deleteActivity  = async({token, activityId}) =>{
    try{
        const response = await fetch(`${url}/routines/${activityId}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        const result = response.json();
        return result;
    }catch(error){
        console.error(error)
    }
}

// fetch functionality for editng activities and routines --------
const editRoutine = async ({token, name, goal, isPublic, routineId}) => {
    try {
        const response = await fetch(`${url}/routines/${routineId}`, {
            method: "PATCH",  
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: name,
              goal:goal,
              isPublic: isPublic
            })
          })
          const result = await response.json();
          console.log(result)
          return result 
    } catch (error) {
        console.error(error)
    }
}

const attachActivityToRoutine = async ({token, activityId, count, duration, routineId}) =>{
    try {
        const response = await fetch (`${url}/routines/${routineId}/activities`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              activityId: activityId,
              count: count, 
              duration: duration
  })
        });
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.error(error)
    }
}

const editActivities = async({ token, name, description, activityId }) => {
    try {
        const response = await fetch (`${url}/activities/${activityId}`, {
            method: "PATCH",  
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              name: name,
              description: description,
            })
          })
          const result = await response.json();
          console.log(result)
    } catch (error) {
        
    }
}
module.exports = {
    fetchLogin,
    fetchUser,
    fetchRegister,
    getAllRoutines,
    fetchRoutinesByUser,
    fetchActivity,
    createNewRoutine,
    createNewActivity,
    deleteActivity,
    deleteRoutine, 
    editRoutine,
    attachActivityToRoutine,
    editActivities
}