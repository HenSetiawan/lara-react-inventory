const apiBaseUrl = import.meta.env.VITE_API_BASEURL;
const login = async (data) => {
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/user`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { login, getUser };
