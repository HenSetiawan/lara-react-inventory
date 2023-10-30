const apiBaseUrl = import.meta.env.VITE_API_BASEURL;
const getAllAdmins = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/users`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteAdmin = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/user/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const addNewAdmin = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
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

const updateAdmin = async (id, data) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/user/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
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

const getAdmintById = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${apiBaseUrl}/api/v1/user/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getAllAdmins, deleteAdmin, addNewAdmin, getAdmintById, updateAdmin };
