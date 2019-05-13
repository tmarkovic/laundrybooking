const authenticateUser = async ({ email, password }) => {
  try {
    let response = await fetch(`/api/signin`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch {
    return null;
  }
};

const validateAccessToken = async () => {
  let token = localStorage.getItem("accessToken");
  if (!token) {
    return false;
  }
  try {
    await fetch("/api/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    return true;
  } catch {
    return false;
  }
};
export { authenticateUser, validateAccessToken };
