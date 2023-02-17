const fetchLogin = async (username, password) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
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
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
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
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
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

const getAllRoutines = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines');
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error)
    }
}
const fetchActivity = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
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

const createNewRoutine = async ({token, name, goal}) => {
    try { const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: true
        })
      })
        const result = await response.json();
        console.log('this is response', response)
        console.log('this is result', result)
       return result
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    fetchLogin,
    fetchUser,
    fetchRegister,
    getAllRoutines,
    fetchActivity,
    createNewRoutine
}