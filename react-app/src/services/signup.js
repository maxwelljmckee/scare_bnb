import axios from 'axios'

export const signUpForm = (user) => {
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

  return axios.post('/api/users/', formData, config)
    .then(res => {
      const user = res;
      return user
    })
    .catch((err) => {
      return err.response
    })
}
