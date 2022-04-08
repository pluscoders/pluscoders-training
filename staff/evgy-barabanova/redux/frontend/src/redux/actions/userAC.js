
export const setUser = (data) => {
  return { type: 'SET_USER', payload: data }
}

export const userTyping = (myEvent) => {
  return {
    type: "USER_TYPING",
    payload: { [myEvent.target.name]: myEvent.target.value }
  }
}

export const clearInputs = () => {
  return { type: 'CLEAR_INPUTS', payload: {} }
}

export const submitUser = (myInputs) => async (dispatch) => {
  const userRequest = await fetch("http://localhost:3210/users/signup", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(myInputs),
  });
  const userFromBack = await userRequest.json()
  console.log(userFromBack);
  dispatch(setUser(userFromBack));
}

export const loginUser = (myInputs) => async (dispatch) => {
  const userRequest = await fetch("http://localhost:3210/users/signin", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(myInputs),
  });
  const userFromBack = await userRequest.json()
  console.log(userFromBack);
  dispatch(setUser(userFromBack));
}

export const getUser = () => async (dispatch) => {
  const data = await fetch('http://localhost:3210/users/session', {
    credentials: 'include',
  })
    .then(raw => raw.json())
  if (data) {
    dispatch(setUser(data))
  }
}

export const logoutAction = () => {
  return {type: 'LOGOUT_USER'}
}

export const logoutUser = () => async (dispatch) => {
 const data = await fetch('http://localhost:3210/users/logout', {
    method: 'GET',
    credentials: 'include',
  })
  dispatch(logoutAction())
  dispatch(setUser({}))
}
