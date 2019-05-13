const authenticateUser = async ({email, password}) => {

  try {
    let response = await fetch(`/api/signin`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({email, password})
    });

    let data = await response.json();

    return data;
  } catch {
    return null;
  }
};

const authorizeUser = async () => {
  let token = localStorage.getItem('accessToken');
  try {
    await fetch('/api/auth', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    return true
  } catch {
    return false;
  }
}
export {authenticateUser, authorizeUser};
