const authenticateUser = async ({ email, password }) => {
  try {
    let response = await fetch(`/api/signin`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    let data = await response.json();

    return data;
  } catch {
    return null;
  }
};

export { authenticateUser };
