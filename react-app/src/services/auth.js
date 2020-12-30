import axios from 'axios'

export const authenticate = async () => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


export const signUp = async (user) => {
  const { profilePic, firstName, lastName, bio, password, email } = user;


  const formData = new FormData();
  formData.append('firstName', firstName)
  formData.append('lastName', lastName)
  formData.append('bio', bio)
  formData.append('password', password)
  formData.append('email', email)
  if (profilePic) {
    formData.append('profilePic', profilePic)
  }

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  }

  let response = await axios.post('/api/auth/signup', formData, config)

  return response;
}
